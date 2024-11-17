import { build } from "gluegun";

export default build()
  .brand('aliases')
  .src('./src')
  .plugins('./node_modules', { matching: 'aliases-*', hidden: true })
  .help()
  .version()
  .exclude(['http', 'template', 'prompt'])
  .checkForUpdates(1)
  .create()

