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
  // enable the following method if you'd like to skip loading one of these core extensions
  // this can improve performance if they're not necessary for your project:
  // .exclude(['meta', 'strings', 'print', 'filesystem', 'semver', 'system', 'prompt', 'http', 'template', 'patching', 'package-manager'])
  // and run it
  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
