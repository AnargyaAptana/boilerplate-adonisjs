import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class ConflictException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.CONFLICT
  }

  public defaultCode() {
    return 'E_CONFLICT'
  }

  public defaultMessage() {
    return 'Conflict'
  }
}
