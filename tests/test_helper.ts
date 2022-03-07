export type TestScenario<T> = {
  [key: string]: T
}

export interface InvalidInputWithErrorBag {
  errorBag: string
  invalidInput: any
}

export interface UnprocessableInputs {
  [key: string]: InvalidInputWithErrorBag
}

export const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
