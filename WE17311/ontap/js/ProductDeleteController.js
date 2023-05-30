window.ProductDeleteController = function($scope, $http, $routeParams, $location){
    var id = $routeParams.id;
    if(id){
        $http.delete(`http://localhost:3000/products/${id}`).then(
            function(response){
                $scope.products = response.data;
                $location.path("products");
                alert(`Delete successfully product ${id}`);
            },
            function(error){
                alert("Lỗi: " + error);
            }
        );
    }
}