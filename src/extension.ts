// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { parseHBML } from "./parser/hbmlTohtmlParser";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hbml-parser" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "hbml-parser.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello VS code");
    }
  );

  let hbmlToHtmlParser = vscode.commands.registerCommand(
    "hbml-parser.convertHbmlToHtml",
    () => {
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
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(hbmlToHtmlParser);
}

// This method is called when your extension is deactivated
export function deactivate() {}
