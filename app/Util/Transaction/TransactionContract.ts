export interface TransactionInterface {
  beginTransaction(): Promise<void>
  commit(): Promise<void>
  rollback(): Promise<void>
}
