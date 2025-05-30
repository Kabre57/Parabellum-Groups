-- Script de migration pour mettre à jour la structure de la table utilisateur
-- Ajoute les nouveaux champs tout en conservant les fonctionnalités d'authentification

-- Vérifier si les colonnes existent déjà avant de les ajouter
DO $$
BEGIN
    -- Ajouter les nouveaux champs s'ils n'existent pas
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'theme') THEN
        ALTER TABLE utilisateur ADD COLUMN theme VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'name') THEN
        ALTER TABLE utilisateur ADD COLUMN name VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'display_name') THEN
        ALTER TABLE utilisateur ADD COLUMN display_name VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'dob') THEN
        ALTER TABLE utilisateur ADD COLUMN dob VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'balance') THEN
        ALTER TABLE utilisateur ADD COLUMN balance DECIMAL(10, 2);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'phone') THEN
        ALTER TABLE utilisateur ADD COLUMN phone VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'email_status') THEN
        ALTER TABLE utilisateur ADD COLUMN email_status VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'kyc_status') THEN
        ALTER TABLE utilisateur ADD COLUMN kyc_status VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'last_login') THEN
        ALTER TABLE utilisateur ADD COLUMN last_login VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'status') THEN
        ALTER TABLE utilisateur ADD COLUMN status VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'address') THEN
        ALTER TABLE utilisateur ADD COLUMN address VARCHAR(200);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'state') THEN
        ALTER TABLE utilisateur ADD COLUMN state VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'country') THEN
        ALTER TABLE utilisateur ADD COLUMN country VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'designation') THEN
        ALTER TABLE utilisateur ADD COLUMN designation VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'projects') THEN
        ALTER TABLE utilisateur ADD COLUMN projects VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'performed') THEN
        ALTER TABLE utilisateur ADD COLUMN performed VARCHAR(50);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'utilisateur' AND column_name = 'tasks') THEN
        ALTER TABLE utilisateur ADD COLUMN tasks VARCHAR(50);
    END IF;
    
    -- Copier les données existantes dans les nouveaux champs
    UPDATE utilisateur SET
        name = nom,
        display_name = prenom;
        
    -- Note: Nous ne supprimons pas les anciennes colonnes pour maintenir la compatibilité
END $$;
