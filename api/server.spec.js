const server = require('./server.js');
const request = require('supertest');

const db = require('../data/dbConfig.js');
const testUser = { username: 'test', email: 'email@emailtest.com', password: 'password' };

describe('server.js', () => {
	it('it should return status code 200', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
	});

	it("it should return 'MOTD'", async () => {
        const MOTD = process.env.MOTD;
		const res = await request(server).get('/');
		expect(res.get('Content-Type')).toBe(MOTD);
	});
});