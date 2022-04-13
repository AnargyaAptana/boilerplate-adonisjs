import AppTransactionHandler from './AppTransactionHandler'
import TestingTransactionHandler from './TestingTransactionHandler'
import TransactionInterface from './TransactionInterface'

export default class FactoryTransaction {
  public static makeTransaction(): TransactionInterface {
    const isOnTesting = process.env.NODE_ENV === 'testing'
    return isOnTesting ? new TestingTransactionHandler() : new AppTransactionHandler()
  }
}
