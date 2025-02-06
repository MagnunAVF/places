import { v4 as uuidv4 } from 'uuid'

import Resource from './Resource'

class Place {
  id: string
  name: string
  description: string
  resources: Resource[]

  constructor(name: string, description: string, resources: Resource[]) {
    if (!name) {
      throw new Error('Name cannot be empty or null or undefined')
    }

    if (!description) {
      throw new Error('Description cannot be empty or null or undefined')
    }

    this.id = uuidv4()
    this.name = name
    this.description = description
    this.resources = resources
  }
}

export default Place
