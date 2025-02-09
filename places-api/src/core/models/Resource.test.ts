import ResourceValidator from '../validators/ResourceValidator'
import UrlValidator from '../../external/validators/UrlValidator'
import Id from '../shared/Id'
import Uuid from '../../external/shared/Uuid'
import Resource, { ResourceType } from './Resource'
import {
  EmptyUrlError,
  InvalidResourceTypeError,
  InvalidUrlError,
} from '../shared/Error'

describe('Resource Model', () => {
  const urlValidator: ResourceValidator = new UrlValidator()
  const uuid: Id = new Uuid()

  it('should create a resource with valid URL', () => {
    const resource = new Resource(
      'image',
      'https://example.com/image.jpg',
      urlValidator,
      uuid
    )
    expect(resource.id).toBeDefined()
    expect(resource.type).toBe(ResourceType.image)
    expect(resource.url).toBe('https://example.com/image.jpg')
  })

  it('should create a resource with valid URL and with an id', () => {
    const resource = new Resource(
      'video',
      'https://example.com/video.mp4',
      urlValidator,
      uuid,
      'aa7f4426-d18a-470d-b3fc-25ac1a630cdc'
    )
    expect(resource.id).toBeDefined()
    expect(resource.type).toBe(ResourceType.video)
    expect(resource.url).toBe('https://example.com/video.mp4')
  })

  it('should throw an error for empty URL', () => {
    expect(() => {
      new Resource('image', '', urlValidator, uuid)
    }).toThrow(EmptyUrlError)
  })

  it('should throw an error for invalid resource type', () => {
    expect(() => {
      new Resource(
        'invalid-type',
        'https://example.com/image.jpg',
        urlValidator,
        uuid
      )
    }).toThrow(InvalidResourceTypeError)
  })

  it('should throw an error for invalid URL', () => {
    expect(() => {
      new Resource('video', 'invalid-url', urlValidator, uuid)
    }).toThrow(InvalidUrlError)
  })
})
