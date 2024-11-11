import { filesystem } from "gluegun"
import { NOW } from "../../src/utils/envs"


const originalEnvs = jest.requireActual('../../src/utils/envs')
jest.mock('../../src/utils/envs', () => ({
  ...originalEnvs,
  ZSHRC_PATH: './zshrc',
  BKP_DIR: './bkp_dir'
}))

describe('zshrc-prepare', () => {
  test('create backup', async () => {
    filesystem.append('./zshrc', '#generated for test')
    require('../../src/cli').run(['node', './bin/aliases', ' '])

    expect(filesystem.exists('./bkp_dir')).toBeTruthy()
    expect(filesystem.read('./bkp_dir/zshrc_' + NOW)).toContain('#generated for test')

    filesystem.remove('./zshrc*')
    filesystem.remove('./bkp_dir')
  })
})
