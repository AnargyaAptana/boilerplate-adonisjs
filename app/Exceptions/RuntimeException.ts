import { Exception } from '@adonisjs/core/build/standalone'
import { HttpStatus } from 'App/Util/response'
import { ExceptionOption } from './Handler'

export default class RuntimeException extends Exception {
  public meta?: object

  constructor(message: string, options?: ExceptionOption) {
    const { code, meta, status } = { ...options }

    super(message, status, code)

    this.message = message
    this.code = code
    this.status = status ?? HttpStatus.INTERNAL_SERVER_ERROR
    this.meta = meta
  }
}
