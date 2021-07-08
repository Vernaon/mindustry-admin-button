const ui = require("ui-lib/library");

let msg = ["", "", "", "", ""]

ui.addButton("admin-button", "admin", () => {
    Call.sendChatMessage(msg[Mathf.floor(Mathf.random()* 5)])})
