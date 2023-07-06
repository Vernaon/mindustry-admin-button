Events.on(EventType.ClientLoadEvent, cons(load => {

    let rgbhex = "";

    let msg = "";

    const hexref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];

    let icons = Iconc.all;

    let chosen_icon = "";

    let icon_counter = 1;

    let icon_list = new Table();

    icons.split("").forEach(icon => {

        if (icon_counter >= 8) {

            icon_list.row();

            icon_counter = 1;

        };

        icon_list.button(icon, () => {

            chosen_icon = icon;

            admin_dialog.cont.clear();

            admin_dialog.cont.add(admin_menu);

        }).width(50).height(50);

        icon_counter += 1;

    });

    let admin_dialog = new BaseDialog("Admin Button");

    let admin_menu = new Table();

    //admin_dialog.cont.clear();

    admin_dialog.addCloseButton();

    //admin_menu.defaults().growX().center();

    admin_menu.button("Send message", () => {

        generate_and_send();

    }).width(250).height(50);

    admin_menu.row();

    admin_menu.button("Symbol", () => {

        admin_dialog.cont.clear();

        admin_dialog.cont.pane(icon_list);

    }).width(250).height(50);

    admin_dialog.cont.clear();

    admin_dialog.cont.add(admin_menu);

    Vars.ui.hudGroup.fill(cons(table => {

        table.button(Icon.admin, Styles.cleari, run(() => {

            admin_dialog.cont.clear();

            admin_dialog.cont.add(admin_menu);

            admin_dialog.show();

        })).width(50).height(50).name("Icon button");

        table.top().marginLeft(1000);

    }));

    function generate_and_send() {

        msg = "";

        for (let i = 0; i < Mathf.ceil(Mathf.random() * 16); i++) {

            rgbhex = "[#";

            for (let k = 0; k < 6; k++) {

                rgbhex += hexref[Mathf.floor(Mathf.random() * 16)];

            };

            let rand = Mathf.ceil(Mathf.random() * 1000);

            msg += rgbhex + "]" + chosen_icon;

        };

        Call.sendChatMessage(msg);

    };

}));
