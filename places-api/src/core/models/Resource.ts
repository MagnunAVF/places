import ResourceValidator from '../validators/ResourceValidator'
import Id from '../shared/Id'

export enum ResourceType {
  'video',
  'image',
}

class Resource {
  public type: ResourceType

  constructor(
    typeString: string,
    public url: string,
    private resourceValidator: ResourceValidator,
    private ID: Id,
    public id?: string
  ) {
    this.resourceValidator = resourceValidator

    if (!url) {
      throw new Error('URL cannot be empty or null or undefined')
    }

    if (!this.resourceValidator.isValid(url)) {
      throw new Error('Invalid URL')
    }

    this.id = id ? id : ID.generate()

    this.type = this.stringToResourceType(typeString)
    this.url = url
  }

  stringToResourceType(type: string): ResourceType {
    switch (type.toLowerCase()) {
      case 'video':
        return ResourceType.video
      case 'image':
        return ResourceType.image
      default:
        throw new Error(
          'Invalid resource type. Type must be either video or image'
        )
    }
  }
}

export default Resource
