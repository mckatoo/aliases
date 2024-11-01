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
    try {
      this._appToolbox.filesystem.copyAsync(BKP_DIR, `${BKP_DIR}/zshrc_${NOW}`)
    } catch (error) {
      error instanceof Error && this._appToolbox.error(error.message)
    }
  }

  appendToZshrc(content: string): void {
    this._appToolbox.filesystem.appendAsync(ZSHRC_PATH, content)
  }
}
