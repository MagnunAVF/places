import { Resource, ResouceType } from './Resource'

describe('Resource Model', () => {
  it('should create a resource with valid URL', () => {
    const resource = new Resource(
      ResouceType.image,
      'https://example.com/image.jpg'
    )
    expect(resource.id).toBeDefined()
    expect(resource.type).toBe(ResouceType.image)
    expect(resource.url).toBe('https://example.com/image.jpg')
  })

  it('should throw an error for empty URL', () => {
    expect(() => {
      new Resource(ResouceType.image, '')
    }).toThrow('URL cannot be empty')
  })

  it('should throw an error for invalid resource type', () => {
    expect(() => {
      new Resource(
        'invalid-type' as unknown as ResouceType,
        'https://example.com/image.jpg'
      )
    }).toThrow('Type must be either video or image')
  })

  it('should throw an error for invalid URL', () => {
    expect(() => {
      new Resource(ResouceType.video, 'invalid-url')
    }).toThrow('Invalid URL')
  })
})
