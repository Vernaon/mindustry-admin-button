var rgbhex = "";
var msg = "";
const hexref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {
        
        generate_and_send();
        
        })).width(50).height(50).name("admin button");
        
        table.top().marginLeft(1000);
    }));
});

function generate_and_send() {
    msg = "";
    for(let i=0; i<Mathf.ceil(Mathf.random() * 16); i++) {
       rgbhex = "[#";
       for(let k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 16)];
       };
    let rand = Mathf.ceil(Mathf.random()*1000);
    msg+=rgbhex + "]" + ((rand == 1) ? "": "");
    };
    Call.sendChatMessage(msg);
};
