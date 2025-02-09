import ResourceValidator from '../validators/ResourceValidator'
import Id from '../shared/Id'
import {
  EmptyUrlError,
  InvalidResourceTypeError,
  InvalidUrlError,
} from '../shared/Error'

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
      throw new EmptyUrlError()
    }

    if (!this.resourceValidator.isValid(url)) {
      throw new InvalidUrlError()
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
        throw new InvalidResourceTypeError()
    }
  }
}

export default Resource
