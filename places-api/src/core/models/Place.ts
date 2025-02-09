import { EmptyDescriptionError, EmptyNameError } from '../shared/Error'
import Id from '../shared/Id'
import Resource from './Resource'

class Place {
  constructor(
    public name: string,
    public description: string,
    public resources: Resource[],
    private ID: Id,
    public id?: string,
    public createAt?: Date,
    public updatedAt?: Date
  ) {
    if (!name) {
      throw new EmptyNameError()
    }

    if (!description) {
      throw new EmptyDescriptionError()
    }

    this.id = id ? id : ID.generate()

    this.name = name
    this.description = description
    this.resources = resources
    this.createAt = createAt
    this.updatedAt = updatedAt
  }
}

export default Place
