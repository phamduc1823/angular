var app = angular.module("myApp",["ngRoute"]);
    app.config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/home",{
            templateUrl: "./root/home.html"
        })
        .when("/about",{
            templateUrl: "./root/about.html"
        })
        .when("/contact",{
            templateUrl: "./root/contact.html"
        })
        .when("/feed-back",{
            templateUrl: "./root/feedBack.html"
        })
        .when("/faq",{
            templateUrl: "./root/question.html"
        })
        .when("/category/:name",{
            templateUrl: "./account/productList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:name",{
            templateUrl: "./account/productList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:name",{
            templateUrl: "./account/productList.html",
            controller: "speciaCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
    });
    app.run(function($rootScope){
        $rootScope.$on("$routeChangeStart",function(){
            $rootScope.loading = true;
        });
        $rootScope.$on("$routeChangeSuccess",function(){
            $rootScope.loading = false;
        });
        $rootScope.$on("$routeChangeError",function(){
            $rootScope.loading = false;
            alert("Lỗi, không tải được template!");
        });
    });