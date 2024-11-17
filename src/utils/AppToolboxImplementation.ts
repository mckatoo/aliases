import { GluegunToolbox } from "gluegun"
import { ALIASES_PATH, BKP_DIR, NOW, ZSHRC_PATH } from "./envs"


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

  readAliases(): Promise<string> {
    return this._appToolbox.filesystem.readAsync(ALIASES_PATH)
  }

  createZshrcBackup(): void {
    const fs = this._appToolbox.filesystem
    !fs.exists(BKP_DIR) && fs.dir(BKP_DIR)
    fs.copyAsync(ZSHRC_PATH, `${BKP_DIR}/zshrc_${NOW}`)
  }

  fileExists(path: string) {
    return this._appToolbox.filesystem.exists(path)
  }

  createAliasesBackup(): void {
    const fs = this._appToolbox.filesystem
    !fs.exists(BKP_DIR) && fs.dir(BKP_DIR)
    fs.copyAsync(ALIASES_PATH, `${BKP_DIR}/aliases_${NOW}`)
  }

  appendToZshrc(content: string): void {
    this._appToolbox.filesystem.append(ZSHRC_PATH, content)
  }

  appendToAliases(content: string): void {
    this._appToolbox.filesystem.append(ALIASES_PATH, content)
  }
}
