import * as vscode from "vscode";
import { parseHBML } from "./parser/heyitsdoodler_hbml/parser";

export class AppModel {
  async convertHbmlToHtml() {
    let originalFileText: string | undefined =
      vscode.window.activeTextEditor?.document.getText();
    let originalFilePath: string | undefined =
      vscode.window.activeTextEditor?.document.uri.path;

    if (originalFileText == null || originalFilePath == null) return;

    let originalFileNameWithExtension = originalFilePath?.substring(
      originalFilePath.lastIndexOf("/")
    );

    if (
      originalFileNameWithExtension.substring(
        originalFileNameWithExtension.lastIndexOf(".")
      ) != ".hbml"
    )
      return;

    let newFilePath =
      originalFilePath.substring(0, originalFilePath.lastIndexOf("/")) +
      originalFileNameWithExtension.substring(
        0,
        originalFileNameWithExtension.lastIndexOf(".")
      ) +
      ".html";

    vscode.workspace.fs.writeFile(
      vscode.Uri.parse(newFilePath),
      Buffer.from(parseHBML(originalFileText))
    );
  }

  dispose() {}
}
