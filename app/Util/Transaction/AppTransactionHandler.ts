import Database, { TransactionClientContract } from '@ioc:Adonis/Lucid/Database'
import { TransactionInterface } from './TransactionContract'

export default class AppTransactionHandler implements TransactionInterface {
  protected transaction?: TransactionClientContract

  public async beginTransaction() {
    this.transaction = await Database.transaction()
  }

  public async commit(): Promise<void> {
    await this.transaction?.commit()
  }

  public async rollback(): Promise<void> {
    await this.transaction?.rollback()
  }
}
