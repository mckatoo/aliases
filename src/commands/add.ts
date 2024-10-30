import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'add',
  alias: ['a'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      print: { info },
    } = toolbox
    const splitedShellEnv = process.env.SHELL.split('/')
    const rcFile = `${splitedShellEnv[splitedShellEnv.length - 1]}rc`

    const name = parameters.options.name
    const command = parameters.options.command
    // const exists = filesystem.read()

    info(`Added alias "${name}" with command "${command}" on ${rcFile} file`)
  },
}
