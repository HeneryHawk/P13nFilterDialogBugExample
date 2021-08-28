/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/ui5/ex/P13nFilterDialogBugExample/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
