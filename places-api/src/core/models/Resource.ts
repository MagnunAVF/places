import ResourceValidator from '../validators/ResourceValidator'
import Id from '../shared/Id'

export enum ResouceType {
  'video',
  'image',
}

class Resource {
  constructor(
    public type: ResouceType,
    public url: string,
    private resourceValidator: ResourceValidator,
    private ID: Id,
    public id?: string
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

    this.id = id ? id : ID.generate()

    this.type = type
    this.url = url
  }
}

export default Resource
