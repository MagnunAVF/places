import Place from './Place'
import Resource from './Resource'
import Id from '../shared/Id'
import Uuid from '../../external/shared/Uuid'

describe('Place Model', () => {
  const uuid: Id = new Uuid()

  it('should create a Place instance with valid inputs', () => {
    const resources: Resource[] = []
    const place = new Place('Park', 'A nice place to relax', resources, uuid)

    expect(place).toBeInstanceOf(Place)
    expect(place.id).toBeDefined()
    expect(place.name).toBe('Park')
    expect(place.description).toBe('A nice place to relax')
    expect(place.resources).toBe(resources)
  })

  it('should create a Place instance with valid inputs and with an id', () => {
    const resources: Resource[] = []
    const place = new Place(
      'Park',
      'A nice place to relax',
      resources,
      uuid,
      'aa7f4426-d18a-470d-b3fc-25ac1a630cdc'
    )

    expect(place).toBeInstanceOf(Place)
    expect(place.id).toBeDefined()
    expect(place.name).toBe('Park')
    expect(place.description).toBe('A nice place to relax')
    expect(place.resources).toBe(resources)
  })

  it('should throw an error if name is empty', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place('', 'A nice place to relax', resources, uuid)
    }).toThrow('Name cannot be empty or null or undefined')
  })

  it('should throw an error if name is null', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place(
        null as unknown as string,
        'A nice place to relax',
        resources,
        uuid
      )
    }).toThrow('Name cannot be empty or null or undefined')
  })

  it('should throw an error if name is undefined', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place(
        undefined as unknown as string,
        'A nice place to relax',
        resources,
        uuid
      )
    }).toThrow('Name cannot be empty or null or undefined')
  })

  it('should throw an error if description is empty', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place('Park', '', resources, uuid)
    }).toThrow('Description cannot be empty or null or undefined')
  })

  it('should throw an error if description is null', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place('Park', null as unknown as string, resources, uuid)
    }).toThrow('Description cannot be empty or null or undefined')
  })

  it('should throw an error if description is undefined', () => {
    const resources: Resource[] = []

    expect(() => {
      new Place('Park', undefined as unknown as string, resources, uuid)
    }).toThrow('Description cannot be empty or null or undefined')
  })
})
