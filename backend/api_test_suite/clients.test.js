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
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});