window.ProductUpdateController = function($scope,$http,$location,$routeParams){
    $scope.name = "";
    $scope.gia = "";
    $scope.loai = "";

    var id = $routeParams.id;

    if(id){
        $http.get(`http://localhost:3000/products/${id}`).then(
            function(response){
                if(response.status === 200){
                    $scope.name = response.data.name;
                    $scope.gia = response.data.price;
                    $scope.loai = response.data.categoryName;
                }
            },function(error){
                alert("Lỗi: "+error);
            }
        );
    };
    
    $scope.submit = function(){
        if(id){
            return $http.put(`http://localhost:3000/products/${id}`,{
                categoryName: $scope.loai,
                name: $scope.name,
                price: $scope.gia
            }).then(function(response){
                if(response.status === 200){
                    $location.path("products");
                }
            }
            ,function(error){
                alert("Lỗi: "+error);
            });
        }
    }
};