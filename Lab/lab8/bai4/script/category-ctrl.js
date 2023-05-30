app.controller("categoryCtrl",function($scope,$routeParams){
    $scope.title = "Category";
    $scope.name = $routeParams.name;
});