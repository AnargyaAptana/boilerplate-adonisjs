import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class InternalServerErrorException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.INTERNAL_SERVER_ERROR
  }

  public defaultCode() {
    return 'E_INTERNAL_SERVER_ERROR'
  }

  public defaultMessage() {
    return 'Internal Server Error'
  }
}
