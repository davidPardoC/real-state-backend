import supertest from 'supertest';
import { app } from '../../app';

const api = supertest(app);

describe('HealthCheck', () => {
  it('Should get status ok', async () => {
    await api.get('/status').expect(200);
  });
});
