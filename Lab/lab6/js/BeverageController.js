var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.items = [
        {
            name: "Nước ngọt",
            price: 10000
        },
        {
            name: "Cafe đen",
            price: 8000
        },
        {
            name: "Thuốc lá",
            price: 12000
        }
    ];

    $scope.getAmount = function () {
        var amount = 0;
        $scope.items.forEach(element => {
            if(element.buy){
                amount += element.price * element.quantity;
            }
        });
        return amount;
    }
});