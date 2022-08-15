const ui = require("ui-lib/library");

var rgbhex = "";
var msg = "";
const hexref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];

ui.addButton("admin-button", "admin", () => {
    
    msg = "";
    for(let i=0; i<Mathf.ceil(Mathf.random() * 16); i++) {
       rgbhex = "[#";
       for(let k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 16)];
       }
    let rand = Mathf.ceil(Mathf.random()*1000);
    msg+=rgbhex + "]" + ((rand == 1) ? "": "");
    }
    Call.sendChatMessage(msg);
});
