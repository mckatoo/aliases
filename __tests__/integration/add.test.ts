import { cli } from "./cli.test"

test('add alias', async () => {
  // const zshrcPath = `${process.env.HOME}/.zshrc`
  const output = await cli('add --name="l" --command="ls -l"')

  expect(output).toContain('Added alias "l" with command "ls -l" on zshrc file')

  // expect(zshFile).toContain(`alias l="ls -l"`)
})
