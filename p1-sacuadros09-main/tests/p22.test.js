const request = require('supertest');
const app = require('../src/index.js');

describe('API GET Query /cars?preciotag=lowest', () => {
    test('Debería traer el carro de menor precio', async () => {
        // Send a GET request to the server
        const resTemp = await request(app).get(`/cars`).send();
        const res = await request(app).get(`/cars?preciotag=lowest`).send();
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
        const lowestPriceCar = res.body[0];
        const minPrice = Math.min(...resTemp.body.map(car => car.precio));
        expect(lowestPriceCar.precio).toEqual(minPrice);
    });
});