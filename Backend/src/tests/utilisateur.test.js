/**
 * Test des endpoints utilisateur avec création préalable d'un utilisateur de test
 */
const axios = require('axios');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Configuration
const API_URL = 'http://localhost:3001/api';
const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE || 'Databases_parabellum',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1234'
};

console.log('Configuration de la base de données:', {
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  database: DB_CONFIG.database,
  user: DB_CONFIG.user,
  // Ne pas afficher le mot de passe pour des raisons de sécurité
  password: '********'
});

// Utilisateur de test
const TEST_USER = {
  name: 'Test User',
  display_name: 'Testeur',
  email: 'test@example.com',
  mot_de_passe: 'password123',
  theme: 'light',
  dob: '1990-01-01',
  phone: '+33123456789',
  role_id: 1, // Rôle admin
  // Ajouter les champs obligatoires de l'ancienne structure
  nom: 'Test User',
  prenom: 'Testeur'
};

// Variables pour stocker les données de test
let authToken = '';
let createdUserId = null;
const pool = new Pool(DB_CONFIG);

/**
 * Fonction pour créer un utilisateur de test directement en base
 */
async function createTestUserInDb() {
  try {
    console.log('Création d\'un utilisateur de test en base de données...');
    
    // Vérifier si l'utilisateur existe déjà
    const checkResult = await pool.query(
      'SELECT id FROM utilisateur WHERE email = $1',
      [TEST_USER.email]
    );
    
    if (checkResult.rows.length > 0) {
      console.log(`L'utilisateur de test existe déjà avec l'ID: ${checkResult.rows[0].id}`);
      return checkResult.rows[0].id;
    }
    
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(TEST_USER.mot_de_passe, 10);
    
    // Insérer l'utilisateur avec tous les champs obligatoires
    const result = await pool.query(
      `INSERT INTO utilisateur (
        nom, prenom, email, mot_de_passe, role_id, 
        name, display_name, theme, dob, phone,
        created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
      RETURNING id`,
      [
        TEST_USER.nom,
        TEST_USER.prenom,
        TEST_USER.email,
        hashedPassword,
        TEST_USER.role_id,
        TEST_USER.name,
        TEST_USER.display_name,
        TEST_USER.theme,
        TEST_USER.dob,
        TEST_USER.phone
      ]
    );
    
    if (result.rows.length > 0) {
      console.log(`Utilisateur de test créé avec l'ID: ${result.rows[0].id}`);
      return result.rows[0].id;
    } else {
      console.error('Échec de la création de l\'utilisateur de test en base');
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur de test en base:', error);
    return null;
  }
}

/**
 * Fonction pour tester l'authentification
 */
async function testAuthentication() {
  try {
    console.log('Test d\'authentification...');
    
    // Se connecter avec l'utilisateur de test
    // Utiliser mot_de_passe au lieu de password pour correspondre au contrôleur d'authentification
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: TEST_USER.email,
      mot_de_passe: TEST_USER.mot_de_passe
    });
    
    if (loginResponse.data && loginResponse.data.token) {
      authToken = loginResponse.data.token;
      console.log('Authentification réussie, token JWT obtenu');
      return true;
    } else {
      console.error('Échec de l\'authentification: pas de token dans la réponse');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors du test d\'authentification:', error.response?.data || error.message);
    
    // Afficher plus de détails sur l'erreur
    if (error.response) {
      console.error('Détails de la réponse d\'erreur:');
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
      console.error('Data:', error.response.data);
    }
    
    return false;
  }
}

/**
 * Fonction pour tester la création d'un utilisateur via l'API
 */
async function testCreateUser() {
  try {
    console.log('Test de création d\'utilisateur via API...');
    
    // Générer un email unique pour éviter les conflits
    const uniqueEmail = `test_${Date.now()}@example.com`;
    const testUser = { 
      ...TEST_USER, 
      email: uniqueEmail,
      name: 'API Test User',
      nom: 'API Test User', // Inclure les champs obligatoires de l'ancienne structure
      prenom: 'API Testeur'
    };
    
    const response = await axios.post(`${API_URL}/utilisateurs`, testUser, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    console.log('Réponse de création d\'utilisateur:', JSON.stringify(response.data));
    
    // Adapter le script pour accepter un ID numérique directement
    if (response.status === 201) {
      if (response.data.utilisateur && typeof response.data.utilisateur === 'object' && response.data.utilisateur.id) {
        // Si l'utilisateur est un objet avec un ID
        createdUserId = response.data.utilisateur.id;
      } else if (typeof response.data.utilisateur === 'number') {
        // Si l'utilisateur est directement un ID numérique
        createdUserId = response.data.utilisateur;
      }
      
      if (createdUserId) {
        console.log(`Création d'utilisateur réussie, ID: ${createdUserId}`);
        return true;
      }
    }
    
    console.error('Échec de la création d\'utilisateur: pas d\'ID dans la réponse');
    return false;
  } catch (error) {
    console.error('Erreur lors du test de création d\'utilisateur:', error.response?.data || error.message);
    return false;
  }
}

/**
 * Fonction pour tester la récupération d'un utilisateur
 */
async function testGetUser() {
  try {
    console.log('Test de récupération d\'utilisateur...');
    
    if (!createdUserId) {
      console.error('Impossible de tester la récupération: aucun utilisateur créé');
      return false;
    }
    
    const response = await axios.get(`${API_URL}/utilisateurs/${createdUserId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    if (response.status === 200 && response.data) {
      console.log('Récupération d\'utilisateur réussie');
      console.log('Données utilisateur:', response.data);
      return true;
    } else {
      console.error('Échec de la récupération d\'utilisateur');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors du test de récupération d\'utilisateur:', error.response?.data || error.message);
    return false;
  }
}

/**
 * Fonction pour tester la mise à jour d'un utilisateur
 */
async function testUpdateUser() {
  try {
    console.log('Test de mise à jour d\'utilisateur...');
    
    if (!createdUserId) {
      console.error('Impossible de tester la mise à jour: aucun utilisateur créé');
      return false;
    }
    
    const updateData = {
      display_name: 'Testeur Modifié',
      theme: 'dark',
      phone: '+33987654321',
      prenom: 'Testeur Modifié' // Inclure les champs obligatoires de l'ancienne structure
    };
    
    const response = await axios.put(`${API_URL}/utilisateurs/${createdUserId}`, updateData, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    if (response.status === 200 && response.data.utilisateur) {
      console.log('Mise à jour d\'utilisateur réussie');
      console.log('Données mises à jour:', response.data.utilisateur);
      return true;
    } else {
      console.error('Échec de la mise à jour d\'utilisateur');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors du test de mise à jour d\'utilisateur:', error.response?.data || error.message);
    return false;
  }
}

/**
 * Fonction pour tester la suppression d'un utilisateur
 */
async function testDeleteUser() {
  try {
    console.log('Test de suppression d\'utilisateur...');
    
    if (!createdUserId) {
      console.error('Impossible de tester la suppression: aucun utilisateur créé');
      return false;
    }
    
    const response = await axios.delete(`${API_URL}/utilisateurs/${createdUserId}`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    
    if (response.status === 200) {
      console.log('Suppression d\'utilisateur réussie');
      return true;
    } else {
      console.error('Échec de la suppression d\'utilisateur');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors du test de suppression d\'utilisateur:', error.response?.data || error.message);
    return false;
  }
}

/**
 * Fonction principale pour exécuter tous les tests
 */
async function runTests() {
  try {
    console.log('Début des tests des endpoints utilisateur...');
    
    // Créer un utilisateur de test en base
    const testUserId = await createTestUserInDb();
    if (!testUserId) {
      console.error('Tests interrompus: échec de la création de l\'utilisateur de test');
      return false;
    }
    
    // Test d'authentification
    const authSuccess = await testAuthentication();
    if (!authSuccess) {
      console.error('Tests interrompus: échec de l\'authentification');
      return false;
    }
    
    // Test de création d'utilisateur
    const createSuccess = await testCreateUser();
    if (!createSuccess) {
      console.error('Tests interrompus: échec de la création d\'utilisateur');
      return false;
    }
    
    // Test de récupération d'utilisateur
    const getSuccess = await testGetUser();
    if (!getSuccess) {
      console.error('Tests interrompus: échec de la récupération d\'utilisateur');
      return false;
    }
    
    // Test de mise à jour d'utilisateur
    const updateSuccess = await testUpdateUser();
    if (!updateSuccess) {
      console.error('Tests interrompus: échec de la mise à jour d\'utilisateur');
      return false;
    }
    
    // Test de suppression d'utilisateur
    const deleteSuccess = await testDeleteUser();
    if (!deleteSuccess) {
      console.error('Tests interrompus: échec de la suppression d\'utilisateur');
      return false;
    }
    
    console.log('Tous les tests ont réussi!');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'exécution des tests:', error);
    return false;
  } finally {
    // Fermer la connexion à la base de données
    await pool.end();
  }
}

// Exécuter les tests si ce fichier est appelé directement
if (require.main === module) {
  runTests()
    .then(success => {
      if (success) {
        console.log('Tests terminés avec succès');
        process.exit(0);
      } else {
        console.error('Tests échoués');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Erreur lors de l\'exécution des tests:', error);
      process.exit(1);
    });
}
