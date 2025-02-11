import Place from '../models/Place'
import PlaceRepository from '../respository/PlaceRepository'
import UseCase from './UseCase'

class CreatePlace implements UseCase<Place, string> {
  constructor(private placeRepository: PlaceRepository) {}

  async execute(place: Place): Promise<string> {
    const id = await this.placeRepository.create(place)

    return id
  }
}

export default CreatePlace
