var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/home",{
        templateUrl: "./pages/home.html",
        controller: ProductControlle
    })
    .when("/add",{
        templateUrl: "./pages/add.html",
        controller: ProductAddController
    })
    .when("/delete/:id",{
        templateUrl: "./pages/home.html",
        controller: ProductDeleteController
    })
    .when("/edit/:id",{
        templateUrl: "./pages/edit.html",
        controller: ProductEditController
    })
    .otherwise({
        redirectTo: "/home"
    })
});