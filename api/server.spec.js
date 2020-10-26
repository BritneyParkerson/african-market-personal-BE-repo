const server = require('./server.js');
const request = require('supertest');

describe('server', () => {
	it('Should return 200', async () => {
		const res = await request(server).get('/');
		expect(res.status).toBe(200);
	});

	it("Should return 'text/html in charset utf-8'", async () => {
		const res = await request(server).get('/');
		expect(res.get('Content-Type')).toEqual('text/html; charset=utf-8');
	});
});