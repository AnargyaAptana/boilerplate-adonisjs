import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ExceptionJsonMessage, ExceptionOption } from '../Handler'

export default abstract class BaseHttpException extends Exception {
  public message: string
  public code: string
  public status: number
  public meta?: object

  public abstract defaultMessage(): string
  public abstract defaultCode(): string
  public abstract defaultStatus(): number

  constructor(message: string, options?: ExceptionOption) {
    const { code, meta, status } = { ...options }

    super(message, status, code)

    const isMessageEmpty = !message || message.trim().length === 0
    this.message = isMessageEmpty ? this.defaultMessage() : message
    this.code = code ?? this.defaultCode()
    this.status = status ?? this.defaultStatus()
    this.meta = meta
  }

  public async handle(error: this, ctx: HttpContextContract) {
    const message: ExceptionJsonMessage = {
      errors: {
        message: this.message,
        error_code: this.code,
        meta: this.meta,
      },
    }

    ctx.response.status(error.status).send(message)
  }
}
