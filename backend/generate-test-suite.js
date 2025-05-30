const fs = require('fs');
const path = require('path');

// Créer un dossier de sortie
const outputDir = path.join(__dirname, 'api_test_suite');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// 1. Fichier Postman
const postmanCollection = {
  info: {
    name: "API Tests - Backend",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  item: [
    {
      name: "Auth - Login",
      request: {
        method: "POST",
        header: [{ key: "Content-Type", value: "application/json" }],
        body: {
          mode: "raw",
          raw: JSON.stringify({ email: "admin@example.com", password: "secret" }, null, 2)
        },
        url: {
          raw: "http://localhost:3000/auth/login",
          host: ["localhost"],
          port: "3000",
          path: ["auth", "login"]
        }
      }
    },
    {
      name: "Clients - Get All",
      request: {
        method: "GET",
        header: [{ key: "Authorization", value: "Bearer {{token}}" }],
        url: {
          raw: "http://localhost:3000/clients",
          host: ["localhost"],
          port: "3000",
          path: ["clients"]
        }
      }
    }
  ]
};

fs.writeFileSync(path.join(outputDir, 'backend-api-collection.postman.json'), JSON.stringify(postmanCollection, null, 2));

// 2. Fichier .http
const httpContent = `
### Login
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "secret"
}

### Get all clients
GET http://localhost:3000/clients
Authorization: Bearer {{token}}

### Create client
POST http://localhost:3000/clients
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "name": "Client 1",
  "email": "client1@example.com"
}
`;

fs.writeFileSync(path.join(outputDir, 'api-requests.http'), httpContent.trim());

// 3. Fichier Jest + Supertest
const jestTest = `
const request = require('supertest');
const app = require('../server'); // Ajuste ce chemin si nécessaire

describe('Clients API', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'admin@example.com', password: 'secret' });
    token = res.body.token;
  });

  it('should fetch all clients', async () => {
    const res = await request(app)
      .get('/clients')
      .set('Authorization', \`Bearer \${token}\`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
`;

fs.writeFileSync(path.join(outputDir, 'clients.test.js'), jestTest.trim());

console.log('✅ Fichiers générés dans :', outputDir);
