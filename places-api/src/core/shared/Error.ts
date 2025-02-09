export class EmptyUrlError extends Error {
  constructor(message: string = 'URL cannot be empty or null or undefined') {
    super(message)
    this.name = this.constructor.name

    Object.setPrototypeOf(this, EmptyUrlError.prototype)
  }
}

export class InvalidUrlError extends Error {
  constructor(message: string = 'Invalid URL') {
    super(message)
    this.name = this.constructor.name

    Object.setPrototypeOf(this, InvalidUrlError.prototype)
  }
}

export class InvalidResourceTypeError extends Error {
  constructor(
    message: string = 'Invalid resource type. Type must be either video or image'
  ) {
    super(message)
    this.name = this.constructor.name

    Object.setPrototypeOf(this, InvalidResourceTypeError.prototype)
  }
}

export class EmptyNameError extends Error {
  constructor(message: string = 'Name cannot be empty or null or undefined') {
    super(message)
    this.name = this.constructor.name

    Object.setPrototypeOf(this, EmptyNameError.prototype)
  }
}

export class EmptyDescriptionError extends Error {
  constructor(
    message: string = 'Description cannot be empty or null or undefined'
  ) {
    super(message)
    this.name = this.constructor.name

    Object.setPrototypeOf(this, EmptyDescriptionError.prototype)
  }
}
