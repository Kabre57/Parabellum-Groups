-- Scripts SQL pour la création des tables de base
-- Base de données PostgreSQL

-- =============================================
-- CRÉATION DES TABLES PRINCIPALES
-- =============================================

-- Table role
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL
);

-- Table specialite
CREATE TABLE specialite (
    id SERIAL PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL
);

-- Table utilisateur (structure fusionnée)
CREATE TABLE utilisateur (
    id SERIAL PRIMARY KEY,
    
    -- Champs de la nouvelle structure
    theme VARCHAR(50),
    name VARCHAR(100) NOT NULL,
    display_name VARCHAR(100),
    dob VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2),
    phone VARCHAR(50),
    email_status VARCHAR(50),
    kyc_status VARCHAR(50),
    last_login VARCHAR(50),
    status VARCHAR(50),
    address VARCHAR(200),
    state VARCHAR(100),
    country VARCHAR(100),
    designation VARCHAR(100),
    projects VARCHAR(50),
    performed VARCHAR(50),
    tasks VARCHAR(50),
    
    -- Relation avec la table role (conservée)
    role_id INTEGER REFERENCES role(id),
    
    -- Champs d'authentification (conservés)
    mot_de_passe VARCHAR(255) NOT NULL,
    reset_password_token VARCHAR(255),
    reset_password_expires_at TIMESTAMPTZ,
    
    -- Timestamps (conservés)
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Table client
CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    contact VARCHAR(100),
    localisation VARCHAR(255)
);

-- Table mission
CREATE TABLE mission (
    num_intervention SERIAL PRIMARY KEY,
    nature_intervention VARCHAR(255),
    objectif_du_contrat TEXT,
    description TEXT,
    date_sortie_fiche_intervention DATE,
    client_id INTEGER REFERENCES client(id)
);

-- Table technicien
CREATE TABLE technicien (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    contact VARCHAR(100),
    specialite_id INTEGER REFERENCES specialite(id)
);

-- Table intervention
CREATE TABLE intervention (
    id SERIAL PRIMARY KEY,
    date_heure_debut TIMESTAMPTZ,
    date_heure_fin TIMESTAMPTZ,
    duree NUMERIC,
    mission_id INTEGER REFERENCES mission(num_intervention),
    technicien_id INTEGER REFERENCES technicien(id)
);

-- =============================================
-- CRÉATION DES TABLES ADDITIONNELLES
-- =============================================

-- Table notifications
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES utilisateur(id),
    type VARCHAR(50),
    message TEXT,
    data JSONB,
    read_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Table audit_logs
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES utilisateur(id) ON DELETE SET NULL,
    username VARCHAR(255),
    action_type VARCHAR(255),
    entity_type VARCHAR(100),
    entity_id INTEGER,
    details TEXT,
    ip_address VARCHAR(45),
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Table validation_instances
CREATE TABLE validation_instances (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR(100),
    entity_id INTEGER,
    status VARCHAR(50),
    requested_by_user_id INTEGER REFERENCES utilisateur(id),
    assigned_validator_id INTEGER REFERENCES utilisateur(id),
    validated_by_user_id INTEGER REFERENCES utilisateur(id),
    comments TEXT,
    submitted_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    validated_at TIMESTAMPTZ
);

-- Table reports
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER REFERENCES utilisateur(id)
);

-- =============================================
-- FIN DES SCRIPTS DE CRÉATION
-- =============================================
