/**
 * Middleware de validation pour les requêtes
 */
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { logger } from '../utils/logger';

/**
 * Middleware de validation générique
 * @param schema - Schéma Joi pour la validation
 * @param property - Propriété de la requête à valider (body, params, query)
 */
export const validate = (schema: Joi.ObjectSchema, property: 'body' | 'params' | 'query' = 'body') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    
    if (!error) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
      
      logger.error(`Erreur de validation: ${message}`);
      res.status(400).json({ error: true, message: message });
    }
  };
};

/**
 * Schémas de validation pour les différentes entités
 */
export const validationSchemas = {
  // Schémas pour les clients
  customer: {
    create: Joi.object({
      name: Joi.string().required(),
      company: Joi.string().allow('', null),
      email: Joi.string().email().allow('', null),
      phone: Joi.string().allow('', null),
      address: Joi.string().allow('', null),
      status: Joi.string().allow('', null),
      avatar: Joi.string().allow('', null)
    }),
    update: Joi.object({
      name: Joi.string().required(),
      company: Joi.string().allow('', null),
      email: Joi.string().email().allow('', null),
      phone: Joi.string().allow('', null),
      address: Joi.string().allow('', null),
      status: Joi.string().allow('', null),
      avatar: Joi.string().allow('', null)
    }),
    id: Joi.object({
      id: Joi.number().integer().required()
    })
  },
  
  // Schémas pour les produits
  product: {
    create: Joi.object({
      name: Joi.string().required(),
      price: Joi.number().allow(null),
      category: Joi.string().allow('', null),
      description: Joi.string().allow('', null),
      stock: Joi.number().integer().allow(null),
      image: Joi.string().allow('', null)
    }),
    update: Joi.object({
      name: Joi.string().required(),
      price: Joi.number().allow(null),
      category: Joi.string().allow('', null),
      description: Joi.string().allow('', null),
      stock: Joi.number().integer().allow(null),
      image: Joi.string().allow('', null)
    }),
    id: Joi.object({
      id: Joi.number().integer().required()
    })
  },
  
  // Schémas pour les événements du calendrier
  calendarEvent: {
    create: Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      start: Joi.string().allow('', null),
      end: Joi.string().allow('', null),
      allDay: Joi.boolean().allow(null),
      color: Joi.string().allow('', null),
      extendedProps: Joi.object().allow(null)
    }),
    update: Joi.object({
      title: Joi.string().required(),
      start: Joi.string().allow('', null),
      end: Joi.string().allow('', null),
      allDay: Joi.boolean().allow(null),
      color: Joi.string().allow('', null),
      extendedProps: Joi.object().allow(null)
    }),
    id: Joi.object({
      id: Joi.string().required()
    })
  },
  
  // Schémas pour les projets
  project: {
    create: Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      theme: Joi.string().allow('', null),
      client: Joi.string().allow('', null),
      description: Joi.string().allow('', null),
      tasks: Joi.number().integer().allow(null),
      progress: Joi.number().allow(null),
      team: Joi.array().items(Joi.string()).allow(null),
      team_lead: Joi.string().allow('', null),
      team_count: Joi.number().integer().allow(null),
      status: Joi.string().allow('', null)
    }),
    update: Joi.object({
      title: Joi.string().required(),
      theme: Joi.string().allow('', null),
      client: Joi.string().allow('', null),
      description: Joi.string().allow('', null),
      tasks: Joi.number().integer().allow(null),
      progress: Joi.number().allow(null),
      team: Joi.array().items(Joi.string()).allow(null),
      team_lead: Joi.string().allow('', null),
      team_count: Joi.number().integer().allow(null),
      status: Joi.string().allow('', null)
    }),
    id: Joi.object({
      id: Joi.string().required()
    })
  },
  
  // Schémas pour l'authentification
  auth: {
    register: Joi.object({
      username: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    }),
    login: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
    resetPassword: Joi.object({
      email: Joi.string().email().required()
    }),
    changePassword: Joi.object({
      token: Joi.string().required(),
      password: Joi.string().min(6).required()
    })
  }
};
