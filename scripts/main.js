const ui = require("ui-lib/library");

let msg = ["", "", "", "", ""]

ui.addButton("test", "admin", () => {
    Call.sendChatMessage(msg[Mathf.floor(Mathf.random()* 5)])})
