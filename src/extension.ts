// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { AppModel } from "./appModel";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hbml-parser" is now active!');
  let appModel: AppModel = new AppModel();

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

  let disposableConvertHbmlToHtml = vscode.commands.registerCommand(
    "hbml-parser.convertHbmlToHtml",
    () => {
      appModel.convertHbmlToHtml();
    }
  );

let disposableOneTimeCompileHbmlToHtml = vscode.commands.registerCommand(
    "hbml-parser.oneTimeCompileHbmlToHtml",
    () => {
      appModel.oneTimeCompileHbmlToHtml()
    }
  );

  let disposableOnDivSave = vscode.workspace.onDidSaveTextDocument(() => {
    appModel.convertHbmlToHtml();
  });

  context.subscriptions.push(
    disposable,
    disposableConvertHbmlToHtml,
    disposableOnDivSave,
    disposableOneTimeCompileHbmlToHtml,
    appModel
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
