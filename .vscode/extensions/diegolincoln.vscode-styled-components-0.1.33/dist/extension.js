"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const cssProperties_1 = require("./cssProperties");
function activate(context) {
    console.log('Colon and semicolon fix is active!');
    let enterKeyEvent = vscode.commands.registerCommand('extension.insertColonOrSemiColon', () => __awaiter(this, void 0, void 0, function* () {
        yield vscode.commands.executeCommand('acceptSelectedSuggestion');
        let editor = vscode.window.activeTextEditor;
        let cursorPosition = editor.selection;
        let lineText = editor.document.lineAt(cursorPosition.start.line).text;
        let lineTextList = lineText.trim().split(' ');
        let lastWordBeforeCursor = lineTextList[lineTextList.length - 1];
        if (cssProperties_1.default.includes(lastWordBeforeCursor)) {
            editor.edit((editBuilder) => {
                editBuilder.insert(editor.document.lineAt(cursorPosition.active).range.end, ': ;');
                vscode.commands.executeCommand('cursorLeft');
                vscode.commands.executeCommand('editor.action.triggerSuggest');
            });
        }
    }));
    context.subscriptions.push(enterKeyEvent);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map