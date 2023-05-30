window.ProductEditController = function($scope, $http, $routeParams, $location){
    $scope.name = "";
    $scope.price = "";
    $scope.category = "";

    var id = $routeParams.id;

    if(id){
        $http.get(`http://localhost:3000/products/${id}`).then(
            function(response){
                $scope.name = response.data.name;
                $scope.price = response.data.price;
                $scope.category = response.data.category;
            }
        );
    }
    
    $scope.submit = function () {
        $http.put(`http://localhost:3000/products/${id}`, {
            name: $scope.name,
            price: $scope.price,
            category: $scope.category
        }).then(
            function (response) {
                if (response.status === 200) {
                    $location.path("products");
                    alert("Update success!");
                }
            }
        );
    }
}