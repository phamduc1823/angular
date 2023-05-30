var app = angular.module("myApp ",["ngRoute"]);
app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/home",{
            templateUrl: "./root/home.html",
            controller: ProductController
        })
        .when("/them",{
            templateUrl: "./root/them.html"
        })
        .otherwise({
            redirectTo: "/home"
        });
});