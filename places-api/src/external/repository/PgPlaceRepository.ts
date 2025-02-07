import knex from '../../db/knex'
import Place from '../../core/models/Place'
import PlaceRepository from '../../core/respository/PlaceRepository'
import Uuid from '../shared/Uuid'

const ID = new Uuid()

interface CreateResult {
  id: string
}

class PgPlaceRepository implements PlaceRepository {
  async create(place: Place): Promise<string> {
    const { id, name, description, resources } = place
    const newPlace = { id, name, description, resources }

    const result: CreateResult = (
      await knex('places').insert(newPlace).returning('id')
    )[0]

    return result.id
  }

  async getPlaces(): Promise<Place[]> {
    const placesInDb = await knex('places')

    const places = placesInDb.map(
      (place) =>
        new Place(
          place.name,
          place.description,
          place.resources,
          ID,
          place.id,
          place.created_at,
          place.updated_at
        )
    )

    return places
  }

  async getById(id: string): Promise<Place | null> {
    const place = await knex('places').where({ id }).first()

    return place
      ? new Place(
          place.name,
          place.description,
          place.resources,
          ID,
          place.id,
          place.created_at,
          place.updated_at
        )
      : null
  }

  async updateById(id: string, place: Place): Promise<void> {
    const { name, description, resources } = place
    const placeToUpdate = {
      name,
      description,
      resources,
      updated_at: new Date().toISOString(),
    }

    await knex('places').where({ id }).update(placeToUpdate)
  }

  async deleteById(id: string): Promise<void> {
    await knex('places').where({ id }).del()
  }
}

export default PgPlaceRepository
