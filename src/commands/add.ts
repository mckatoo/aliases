import { GluegunToolbox } from 'gluegun'
import { ALIASES_PATH } from '../utils/envs'

module.exports = {
  name: 'add',
  alias: ['a'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { info },
      filesystem: fs
    } = toolbox
    const splitedShellEnv = process.env.SHELL.split('/')
    const rcFile = `${splitedShellEnv[splitedShellEnv.length - 1]}rc`

    const name = parameters.options.name
    const command = parameters.options.command
    const alias = `alias ${name}="${command}"`
    await fs.appendAsync(ALIASES_PATH, alias)

    info(`Added alias "${name}" with command "${command}" on ${rcFile} file`)
  },
}
