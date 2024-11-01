import { system, filesystem } from 'gluegun'

const src = filesystem.path(__dirname, '..', '..')

export const cli = async (cmd) =>
  system.run('node ' + filesystem.path(src, 'bin', 'aliases') + ` ${cmd}`)

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

