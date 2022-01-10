import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class NotFoundException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.NOT_FOUND
  }

  public defaultCode() {
    return 'E_NOT_FOUND'
  }

  public defaultMessage() {
    return 'Not Found'
  }
}
