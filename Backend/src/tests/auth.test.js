/**
 * Test des fonctionnalités d'authentification
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Configuration simplifiée pour les tests
const config = {
  jwtSecret: 'test-secret-key',
  jwtExpiration: '24h'
};

/**
 * Fonction pour tester l'authentification
 */
const testAuthentication = async () => {
  try {
    console.log('Début du test d\'authentification...');
    
    // Test de la génération de hash de mot de passe
    const testPassword = 'password123';
    const hashedPassword = await bcrypt.hash(testPassword, 8);
    console.log('Génération de hash de mot de passe réussie');
    
    // Test de la vérification de mot de passe
    const isPasswordValid = await bcrypt.compare(testPassword, hashedPassword);
    if (isPasswordValid) {
      console.log('Vérification de mot de passe réussie');
    } else {
      console.error('Échec de la vérification de mot de passe');
      return false;
    }
    
    // Test de la génération de token JWT
    const testUser = { id: 1, username: 'testuser', email: 'test@example.com' };
    const token = jwt.sign({ id: testUser.id }, config.jwtSecret, {
      expiresIn: config.jwtExpiration
    });
    
    if (token) {
      console.log('Génération de token JWT réussie');
    } else {
      console.error('Échec de la génération de token JWT');
      return false;
    }
    
    // Test de la vérification de token JWT
    try {
      const decoded = jwt.verify(token, config.jwtSecret);
      console.log('Vérification de token JWT réussie');
    } catch (error) {
      console.error('Échec de la vérification de token JWT:', error);
      return false;
    }
    
    console.log('Tous les tests d\'authentification ont réussi');
    return true;
  } catch (error) {
    console.error('Erreur lors des tests d\'authentification:', error);
    return false;
  }
};

// Exécuter le test
testAuthentication()
  .then(success => {
    if (success) {
      console.log('Tests d\'authentification terminés avec succès');
      process.exit(0);
    } else {
      console.error('Tests d\'authentification échoués');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Erreur lors de l\'exécution des tests d\'authentification:', error);
    process.exit(1);
  });
