//sipleControls.js
(function () {
    "use strict";

    angular.module("simpleControls", [])
    .directive("vaitCursor", vaitCursor);

    function waitCursor() {
        return {
            templateUrl: "/views/waitCurso.html"
        };
    }
})