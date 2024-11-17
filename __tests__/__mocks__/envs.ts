jest.mock('../../src/utils/envs', () => ({
  ...(jest.requireActual('../../src/utils/envs') as object),
  ZSHRC_PATH: './tmp/zshrc',
  BKP_DIR: './tmp/bkp_dir',
  ALIASES_PATH: './tmp/aliases'
}))

