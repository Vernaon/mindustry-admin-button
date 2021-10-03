const ui = require("ui-lib/library");

var rgbhex = "";
var msg = "";
const hexref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];

let i = 0; let k = 0;

ui.addButton("admin-button", "admin", () => {
    
    msg = "";
    for(i=0; i<Mathf.ceil(Mathf.random() * 16); i++) {
       rgbhex = "#";
       for(k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 16)];
print(msg);
       }
    msg+="[" + rgbhex + "]";
    }
    Call.sendChatMessage(msg);
});
