sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "com/ui5/ex/P13nFilterDialogBugExample/model/models"],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.ui5.ex.P13nFilterDialogBugExample.Component", {
            metadata: {
                manifest: "json",
                interfaces: ["sap.ui.core.IAsyncContentCreation"]
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                this.getModel().setData({ entity: { foo: "Some value from the default model" } });
            }
        });
    }
);
