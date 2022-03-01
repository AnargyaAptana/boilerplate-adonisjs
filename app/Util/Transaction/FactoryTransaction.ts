import AppTransactionHandler from './AppTransactionHandler'
import TestingTransactionHandler from './TestingTransactionHandler'

export default class FactoryTransaction {
  public static makeTransaction() {
    const isOnTesting = process.env.NODE_ENV === 'testing'
    return isOnTesting ? new TestingTransactionHandler() : new AppTransactionHandler()
  }
}
