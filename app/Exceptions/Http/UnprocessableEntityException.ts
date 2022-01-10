import { HttpStatus } from 'App/Util/response'
import BaseHttpException from './BaseHttpException'

export default class UnprocessableEntityException extends BaseHttpException {
  public defaultStatus() {
    return HttpStatus.UNPROCESSABLE_ENTITY
  }

  public defaultCode() {
    return 'E_UNPROCESSABLE_ENTITY'
  }

  public defaultMessage() {
    return 'Unprocessable Entity'
  }
}
