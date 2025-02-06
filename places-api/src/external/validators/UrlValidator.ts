import isURL from 'validator/lib/isURL'

import ResourceValidator from '../../core/validators/ResourceValidator'

class UrlValidator implements ResourceValidator {
  isValid(content: string): boolean {
    return isURL(content)
  }
}

export default UrlValidator
