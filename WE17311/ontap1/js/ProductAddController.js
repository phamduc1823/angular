window.ProductAddController = function ($scope, $http, $location) {
    $scope.name = "";
    $scope.price = "";
    $scope.category = "";

    $scope.submit = function () {
        $http.post(`http://localhost:3000/products`, {
            name: $scope.name,
            price: $scope.price,
            category: $scope.category
        }).then(
            function (response) {
                if (response.status === 201) {
                    $location.path("products");
                    alert("Add success!");
                }
            }
        );
    }
}