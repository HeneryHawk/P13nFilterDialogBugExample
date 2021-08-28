sap.ui.define(
  [
    "com/ui5/ex/P13nFilterDialogBugExample/controller/BaseController",
    "sap/ui/core/Fragment",
  ],
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend(
      "com.ui5.ex.P13nFilterDialogBugExample.controller.MainView",
      {
        onInit() {
          this.getRouter()
            .getRoute("RouteMainView")
            .attachPatternMatched(this._onRouteMatched, this);
        },

        onButtonPress() {
          if (!this._p13nDialog) {
            this._p13nDialog = Fragment.load({
              id: this.getView().getId(),
              name: "com.ui5.ex.P13nFilterDialogBugExample.view.P13nPanel",
              controller: this,
            }).then((oDialog) => {
              this.getView().addDependent(oDialog);
              return oDialog;
            });
          }

          this._p13nDialog.then((oDialog) => oDialog.open());
        },

        onDialogClose() {
          this.byId("p13nDialog").close();
        },

        _onRouteMatched() {
          // Bind the View to an entity
          this.getView().bindElement("/entity");
        },
      }
    );
  }
);
