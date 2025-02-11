import { Express } from 'express'

import CreatePlace from '../../../core/useCases/CreatePlace'
import CreatePlaceDto from '../dtos/CreatePlaceDto'
import Place from '../../../core/models/Place'
import Uuid from '../../shared/Uuid'
import Id from '../../../core/shared/Id'
import ResourceValidator from '../../../core/validators/ResourceValidator'
import UrlValidator from '../../validators/UrlValidator'
import Resource from '../../../core/models/Resource'
import {
  EmptyDescriptionError,
  EmptyNameError,
  EmptyUrlError,
  InvalidResourceTypeError,
  InvalidUrlError,
} from '../../../core/shared/Error'

class CreatePlaceController {
  private transformDtoToModel(placeData: CreatePlaceDto): Place {
    const ID: Id = new Uuid()
    const urlValidator: ResourceValidator = new UrlValidator()

    const resources = placeData.resources
      ? placeData.resources.map(
          (resource) =>
            new Resource(resource.type, resource.url, urlValidator, ID)
        )
      : []

    return new Place(placeData.name, placeData.description, resources, ID)
  }

  hasInvalidAttributes(error: Error): boolean {
    return (
      error instanceof EmptyNameError ||
      error instanceof EmptyDescriptionError ||
      error instanceof EmptyUrlError ||
      error instanceof InvalidUrlError ||
      error instanceof InvalidResourceTypeError
    )
  }

  constructor(server: Express, useCase: CreatePlace) {
    server.post('/places', async (req, resp) => {
      try {
        const placeData: CreatePlaceDto = req.body as CreatePlaceDto

        const id = await useCase.execute(this.transformDtoToModel(placeData))

        console.log(`[INFO] Place Created! ${JSON.stringify(placeData)}`)

        resp.status(201).send({ id })
      } catch (error: unknown) {
        console.log(`[Error] Error Creating Place: ${error}`)

        if (this.hasInvalidAttributes(error as Error)) {
          resp.status(400).send({ error: (error as Error).message })
        } else {
          resp.status(500).send({ error: 'Internal Server Error' })
        }
      }
    })
  }
}

export default CreatePlaceController
