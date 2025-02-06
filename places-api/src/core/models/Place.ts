import Id from '../shared/Id'
import Resource from './Resource'

class Place {
  constructor(
    public name: string,
    public description: string,
    public resources: Resource[],
    private ID: Id,
    public id?: string
  ) {
    if (!name) {
      throw new Error('Name cannot be empty or null or undefined')
    }

    if (!description) {
      throw new Error('Description cannot be empty or null or undefined')
    }

    this.id = id ? id : ID.generate()

    this.name = name
    this.description = description
    this.resources = resources
  }
}

export default Place
