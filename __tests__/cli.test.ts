import cliTest from "./utils/cliTest"

jest.mock('../src/utils/envs', () => ({
  ...(jest.requireActual('../src/utils/envs') as object),
  ZSHRC_PATH: './tmp/zshrc',
  BKP_DIR: './tmp/bkp_dir',
  ALIASES_PATH: './tmp/aliases'
}))


describe('basic cli', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('outputs version', async () => {
    let expected = false
    jest.spyOn(console, 'log').mockImplementationOnce((message: string) => {
      expected = message.indexOf('0.0.1') > -1
    })
    await cliTest.run('--version')

    expect(expected).toBeTruthy()
  })

  test('outputs help', async () => {
    let expected = false
    jest.spyOn(console, 'log').mockImplementationOnce((message: string) => {
      expected = message.indexOf('0.0.1') > -1
    })
    await cliTest.run('--help')

    expect(expected).toBeTruthy()
  })

})

