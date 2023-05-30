window.ProductCreateController = function($scope, $http, $location){
    $scope.name = "";
    $scope.gia = "";
    $scope.loai = "";

    $scope.submit = function(){
        $http.post("http://localhost:3000/products",{
            categoryName: $scope.loai,
            name: $scope.name,
            price: $scope.gia
        }).then(function(response){
            if(response.status === 201){
                $location.path("products");
                alert("Add product successfully");
            }
        },
        function(error){
            alert("Xảy ra lỗi: "+error);
        });
    }
};