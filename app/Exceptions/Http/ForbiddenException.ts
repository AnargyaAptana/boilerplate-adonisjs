import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class ForbiddenException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.FORBIDDEN
  }

  public defaultCode() {
    return 'E_FORBIDDEN'
  }

  public defaultMessage() {
    return 'Forbidden'
  }
}
