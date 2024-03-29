/**
 * This is the command line interface for the swarm orchestration system. It handles map the command line arguments and
 * interactions back and forth with the user. The actual logic is handled by the API object and the rest of the code in
 * src/.
 */

import {program} from 'commander'

import {initialize} from '@aiswarm/orchestrator'

/**
 * Parses the arguments to the command line interface and starts the swarm orchestration system.
 * Supports multiple flags e.g. for debugging purposes.
 */
async function start() {
  program
    .option(
      // noinspection ALL
      '-c, --config <path>',
      'Path to the configuration file or directory. Defaults to ./config.'
    )
    .option(
      '-d, --debug',
      'Enable debug mode. Shows more information in the logs.'
    )
    .option(
      '-v, --verbose',
      'Enable verbose mode. Warning: This can get spammy and might leak secrets.'
    )
    .option('-h, --help', 'Print this help messageInput.')
    .allowUnknownOption(true)
    .showHelpAfterError(true)
    .parse(process.argv)

  program.addHelpText(
    'after',
    ` 
Optional Commands:
  run <instructions>      Run the AI swarm orchestrator with the given initial instruction.
  
`
  )

  const options = program.opts()
  options.help && program.help()

  let loglevel = 'info'
  options.debug && (loglevel = 'debug')
  options.verbose && (loglevel = 'trace')
  const [command, prompt] = program.args
  switch (command.trim()) {
  case undefined:
  case null:
  case false:
  case '':
  case 'undefined':
    await initialize(options.config, loglevel)
    break
  case 'run':
    await (await initialize(options.config, loglevel)).run(prompt)
    break
  default:
    // eslint-disable-next-line no-console
    console.error('Unknown command', command)
    process.exit(1)
  }
}

await start()