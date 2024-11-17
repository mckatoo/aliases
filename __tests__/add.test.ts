import { filesystem as fs } from "gluegun"
import cliTest from "./utils/cliTest"
import { waitForFilesystem } from "./utils/waitFor"


jest.mock('../src/utils/envs', () => ({
  ...(jest.requireActual('../src/utils/envs') as object),
  ZSHRC_PATH: './tmp/zshrc',
  BKP_DIR: './tmp/bkp_dir',
  ALIASES_PATH: './tmp/aliases'
}))

describe('add alias', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  test('add alias with success', async () => {
    fs.remove('./tmp')
    await waitForFilesystem('./tmp', false)
    fs.append('./tmp/zshrc', '#generated for test')
    await waitForFilesystem('./tmp/zshrc')

    const toolbox = await cliTest.run(['node', './bin/aliases', 'add', '--name=l', '--command=ls -l'])
    await require('../src/commands/add').run(toolbox);
    const aliases = fs.read('./tmp/aliases')

    expect(aliases).toContain(`alias l="ls -l"`)
  })
})
