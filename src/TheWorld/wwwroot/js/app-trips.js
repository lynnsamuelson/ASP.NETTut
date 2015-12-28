//app-trips.js
(function () {
    angular.module("app-trips", []);

    "use strict";

    //Creating th Module
    angular.module("app-trips", ["simpleControls", "ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "",
            controllerAs: "vm",
            templateUrl: "/views/tripsView.html"
        });
        $routeProvider.whe("/editor/:tripName", {
            controller: "tripEditorController",
            controllerAs: "vm",
            templateUrl: "/view/tripEditorView.html"
        });
        $routeProvider.otherwise({ redirectTo: "/" });
        });
})();