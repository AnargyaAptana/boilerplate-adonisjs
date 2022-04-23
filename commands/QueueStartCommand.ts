import { BaseCommand } from '@adonisjs/core/build/standalone'
import AbstractQueue from 'App/Queue/AbstractQueue'

export default class QueueStartCommand extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'queue:start'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Command to run queue'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: true,
  }

  public async run() {
    // const { default: QueueChildFromAbstractQueue } = await import('App/Queue/QueueChildFromAbstractQueue')

    const queues: AbstractQueue<any>[] = [
      // new QueueChildFromAbstractQueue('queue-name'),
    ]

    queues.forEach(async (queue) => {
      queue.process(await queue.jobProcess())
    })
  }
}
