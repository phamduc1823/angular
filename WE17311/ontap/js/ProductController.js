window.ProductController = function ($scope, $http){
    $scope.products = [];
    $http.get("http://localhost:3000/products").then(
        function(response){
            if(response.statusText == "OK"){
                $scope.products = response.data;
            }
        },
        function(error){
            alert("Lỗi " + error);
        }
    );
}