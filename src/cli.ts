import { build } from 'gluegun'

async function run(argv) {
  const cli = build()
    .brand('aliases')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'aliases-*', hidden: true })
    .help()
    .version()
    .exclude(['http', 'template', 'prompt'])
    .checkForUpdates(1)
    .create()
  const toolbox = await cli.run(argv)
  // await zshrcPrepare(new AppToolboxImplementation(toolbox))

  return toolbox
}

module.exports = { run }
