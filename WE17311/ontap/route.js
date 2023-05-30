var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/home", {
            templateUrl: "./pages/home.html",
            controller: ProductController   
        })
        .when("/products/create",{
            templateUrl: "./pages/add.html",
            controller: ProductCreateController
        })
        .when("/products/delete/:id",{
            templateUrl: "./pages/home.html",
            controller: ProductDeleteController
        })
        .when("/products/edit/:id",{
            templateUrl: "./pages/add.html",
            controller: ProductUpdateController
        })
        .otherwise({
            redirectTo: "/home",
        });
});