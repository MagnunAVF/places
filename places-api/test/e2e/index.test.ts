import request from 'supertest'
import app from './../../src/app'

describe('API Endpoints', () => {
  it('should get a successful response from the root route', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('msg')
  })

  it('should get a 404 response from an unknown route', async () => {
    const res = await request(app).get('/unknown-route')
    expect(res.statusCode).toEqual(404)
  })
})
