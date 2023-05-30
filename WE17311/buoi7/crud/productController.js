window.ProductController = function($scope, $http){
    $scope.products = [];

    $http.get("http://localhost:3000/list").then(
        function(response){
            if(response.statusText == "OK"){
                $scope.products = response.data;
            }
        },
        function(error){
            console.log(error);
        }
    )
};