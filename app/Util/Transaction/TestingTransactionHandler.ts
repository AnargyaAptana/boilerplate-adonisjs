import Database from '@ioc:Adonis/Lucid/Database'
import TransactionInterface from './TransactionInterface'

export default class TestingTransactionHandler implements TransactionInterface {
  public async beginTransaction(): Promise<void> {
    await Database.beginGlobalTransaction()
  }
  public async commit(): Promise<void> {
    await Database.commitGlobalTransaction()
  }
  public async rollback(): Promise<void> {
    await Database.rollbackGlobalTransaction()
  }
}
