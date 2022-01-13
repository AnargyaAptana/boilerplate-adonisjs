/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception } from '@adonisjs/core/build/standalone'
import { HttpStatus } from 'App/Util/response'

export interface ExceptionOption {
  status?: number
  code?: string
  meta?: object
}

export interface ExceptionJsonMessage {
  errors: {
    message: string
    error_code: string
    meta?: object
  }
}

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract): Promise<any> {
    const { response } = ctx

    if (!(error instanceof Exception)) {
      const message: ExceptionJsonMessage = {
        errors: {
          message: error.message,
          error_code: 'E_INTERNAL_SERVER_ERROR',
        },
      }

      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message)
      return
    }

    return super.handle(error, ctx)
  }
}
