import Env from '@ioc:Adonis/Core/Env'
import Bull, { ProcessPromiseFunction } from 'bull'

export default abstract class AbstractQueue<QueueInput> extends Bull<QueueInput> {
  constructor(queueName: string) {
    super(queueName, {
      prefix: 'bull',
      redis: {
        keyPrefix: Env.get('QUEUE_PREFIX', 'app-queue'),
        port: Env.get('REDIS_PORT'),
        host: Env.get('REDIS_HOST'),
        password: Env.get('REDIS_PASSWORD'),
      },
    })
  }

  public abstract jobProcess(): Promise<ProcessPromiseFunction<QueueInput>>
}
