const ui = require("ui-lib/library");

ui.addButton("admin-button", "admin", () => {
    Call.sendChatMessage("".repeat(Mathf.floor(Mathf.random() * 20)))})
