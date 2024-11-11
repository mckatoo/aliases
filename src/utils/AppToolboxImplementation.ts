import { GluegunToolbox } from "gluegun"
import { BKP_DIR, NOW, ZSHRC_PATH } from "./envs"


export default class {
  private _appToolbox: GluegunToolbox

  constructor(appToolbox: GluegunToolbox) {
    this._appToolbox = appToolbox
  }

  error(message: string): void {
    return this._appToolbox.print.error(message)
  }

  readZshrc(): Promise<string> {
    return this._appToolbox.filesystem.readAsync(ZSHRC_PATH)
  }

  createBackup(): void {
    const fs = this._appToolbox.filesystem
    !fs.exists(BKP_DIR) && fs.dir(BKP_DIR)
    fs.copyAsync(ZSHRC_PATH, `${BKP_DIR}/zshrc_${NOW}`)
  }

  appendToZshrc(content: string): void {
    this._appToolbox.filesystem.appendAsync(ZSHRC_PATH, content)
  }
}
