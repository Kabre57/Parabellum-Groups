import Joi from 'joi';

/**
 * Schémas de validation pour l'entité utilisateur
 */
export const utilisateurValidationSchemas = {
  // Schéma pour la création d'un utilisateur
  create: Joi.object({
    // Champs de la nouvelle structure
    theme: Joi.string().max(50).allow(null, ''),
    name: Joi.string().max(100).required(),
    display_name: Joi.string().max(100).allow(null, ''),
    dob: Joi.string().max(50).allow(null, ''),
    email: Joi.string().email().max(255).required(),
    balance: Joi.number().precision(2).allow(null),
    phone: Joi.string().max(50).allow(null, ''),
    email_status: Joi.string().max(50).allow(null, ''),
    kyc_status: Joi.string().max(50).allow(null, ''),
    last_login: Joi.string().max(50).allow(null, ''),
    status: Joi.string().max(50).allow(null, ''),
    address: Joi.string().max(200).allow(null, ''),
    state: Joi.string().max(100).allow(null, ''),
    country: Joi.string().max(100).allow(null, ''),
    designation: Joi.string().max(100).allow(null, ''),
    projects: Joi.string().max(50).allow(null, ''),
    performed: Joi.string().max(50).allow(null, ''),
    tasks: Joi.string().max(50).allow(null, ''),
    
    // Relation avec la table role
    role_id: Joi.number().integer().allow(null),
    
    // Champ d'authentification
    mot_de_passe: Joi.string().min(6).max(255).required()
  }),

  // Schéma pour la mise à jour d'un utilisateur
  update: Joi.object({
    // Champs de la nouvelle structure
    theme: Joi.string().max(50).allow(null, ''),
    name: Joi.string().max(100),
    display_name: Joi.string().max(100).allow(null, ''),
    dob: Joi.string().max(50).allow(null, ''),
    email: Joi.string().email().max(255),
    balance: Joi.number().precision(2).allow(null),
    phone: Joi.string().max(50).allow(null, ''),
    email_status: Joi.string().max(50).allow(null, ''),
    kyc_status: Joi.string().max(50).allow(null, ''),
    last_login: Joi.string().max(50).allow(null, ''),
    status: Joi.string().max(50).allow(null, ''),
    address: Joi.string().max(200).allow(null, ''),
    state: Joi.string().max(100).allow(null, ''),
    country: Joi.string().max(100).allow(null, ''),
    designation: Joi.string().max(100).allow(null, ''),
    projects: Joi.string().max(50).allow(null, ''),
    performed: Joi.string().max(50).allow(null, ''),
    tasks: Joi.string().max(50).allow(null, ''),
    
    // Relation avec la table role
    role_id: Joi.number().integer().allow(null),
    
    // Champ d'authentification
    mot_de_passe: Joi.string().min(6).max(255).allow(null, '')
  }),

  // Schéma pour la validation d'un ID
  id: Joi.object({
    id: Joi.number().integer().required()
  })
};
