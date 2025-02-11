import express from 'express'
import PgPlaceRepository from './external/repository/PgPlaceRepository'
import CreatePlace from './core/useCases/CreatePlace'
import CreatePlaceController from './external/api/controllers/CreatePlaceController'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  res.status(200).send({ msg: 'OK' })
})

// adapters
const placeRepository = new PgPlaceRepository()

// use cases
const createPlace = new CreatePlace(placeRepository)

// routes and controllers
new CreatePlaceController(app, createPlace)

export default app
