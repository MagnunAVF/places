import { v4 as uuidv4 } from 'uuid'
import ResourceValidator from '../validators/ResourceValidator'

export enum ResouceType {
  'video',
  'image',
}

class Resource {
  id: string
  type: ResouceType
  url: string
  resourceValidator: ResourceValidator

  constructor(
    type: ResouceType,
    url: string,
    resourceValidator: ResourceValidator
  ) {
    if (type !== ResouceType.video && type !== ResouceType.image) {
      throw new Error('Type must be either video or image')
    }

    this.resourceValidator = resourceValidator

    if (!url) {
      throw new Error('URL cannot be empty or null or undefined')
    }

    if (!this.resourceValidator.isValid(url)) {
      throw new Error('Invalid URL')
    }

    this.id = uuidv4()
    this.type = type
    this.url = url
  }
}

export default Resource
