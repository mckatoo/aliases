import AppToolboxImplementation from "../../src/utils/AppToolboxImplementation"
import * as zshrcPrepare from "../../src/utils/zshrc-prepare"

test('zshrc-prepare', async () => {
  await zshrcPrepare(new AppToolboxImplementation(toolbox))
})
