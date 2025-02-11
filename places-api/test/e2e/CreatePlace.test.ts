import request from 'supertest'
import app from '../../src/app' // Adjust the path to your app file
import { deleteAllPlaces } from '../helpers/pg'
import CreatePlace from '../../src/core/useCases/CreatePlace'

describe('POST /places', () => {
  it('should create a new place', async () => {
    const newPlace = {
      name: 'Central Park',
      location: 'New York, NY',
      description: 'A large public park in New York City.',
      resources: [],
    }

    const response = await request(app)
      .post('/places')
      .send(newPlace)
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toHaveProperty('id')

    // tear down actions
    await deleteAllPlaces()
  })

  it('should return 400 if name is missing', async () => {
    const invalidPlace = {
      description: 'A large public park in New York City.',
    }

    const response = await request(app)
      .post('/places')
      .send(invalidPlace)
      .expect('Content-Type', /json/)
      .expect(400)

    expect(response.body).toHaveProperty('error')
  })

  it('should return 400 if description is missing', async () => {
    const invalidPlace = {
      name: 'Central Park',
    }

    const response = await request(app)
      .post('/places')
      .send(invalidPlace)
      .expect('Content-Type', /json/)
      .expect(400)

    expect(response.body).toHaveProperty('error')
  })

  it('should return 500 if there is a server error', async () => {
    jest.spyOn(CreatePlace.prototype, 'execute').mockImplementationOnce(() => {
      throw new Error('Internal Server Error')
    })

    const newPlace = {
      name: 'Central Park',
      description: 'A large public park in New York City.',
    }

    const response = await request(app)
      .post('/places')
      .send(newPlace)
      .expect('Content-Type', /json/)
      .expect(500)

    expect(response.body).toHaveProperty('error')
  })
})
