import { v4 as uuidv4 } from 'uuid'
import isURL from 'validator/lib/isURL'

export enum ResouceType {
  'video',
  'image',
}

export class Resource {
  id: string
  type: ResouceType
  url: string

  constructor(type: ResouceType, url: string) {
    if (type !== ResouceType.video && type !== ResouceType.image) {
      throw new Error('Type must be either video or image')
    }

    if (!url) {
      throw new Error('URL cannot be empty or null or undefined')
    }

    if (!isURL(url)) {
      throw new Error('Invalid URL')
    }

    this.id = uuidv4()
    this.type = type
    this.url = url
  }
}
