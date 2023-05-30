window.ProductControlle = function($scope, $http){
    $scope.products = [];

    $http.get(`http://localhost:3000/products`).then(
        function(response){
            $scope.products = response.data
        }
    );
}