import Place from '../models/Place'

interface PlaceRepository {
  create(place: Place): Promise<string>
  getPlaces(): Promise<Place[]>
  getById(id: string): Promise<Place | null>
  updateById(id: string, place: Place): Promise<void>
  deleteById(id: string): Promise<void>
}

export default PlaceRepository
