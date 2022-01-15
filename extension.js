// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hodotsVSCodeExt" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hodotsVSCodeExt.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from hodots. for VSCode!');
	});

	let createTabBrowser = vscode.commands.registerCommand('hodotsWeb.WebTab', function () {
		const panel = vscode.window.createWebviewPanel(
			'hodotsWeb',
			"hodots.com",
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		function hodotsWebTabCon(uri) {
			return `
			<iframe src="${uri}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    			An error has occurred.
			</iframe>
			`
		}

		panel.webview.html = hodotsWebTabCon("https://hodots.com/")
	})

	context.subscriptions.push(disposable);
	context.subscriptions.push(createTabBrowser);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
