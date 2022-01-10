import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class UnauthorizedException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.UNAUTHORIZED
  }

  public defaultCode() {
    return 'E_UNAUTHORIZED'
  }

  public defaultMessage() {
    return 'Unauthorized'
  }
}
