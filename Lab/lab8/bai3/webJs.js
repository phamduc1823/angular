var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/home", {
            templateUrl: "./root/home.html"
        })
        .when("/about", {
            templateUrl: "./root/about.html"
        })
        .when("/contact", {
            templateUrl: "./root/contact.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
});
app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true;
    });
    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false;
    });
    $rootScope.$on("$routeChangeError", function () {
        $rootScope.loading = false;
        alert("Lỗi, không tải được template!");
    });
});
