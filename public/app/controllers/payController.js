angular.module('payController', [])

.controller('payController', function ($scope, $http) {

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $scope.message = 'Everyone come and see how good I look!';
    $scope.mkey = 'gtKFFx';
    $scope.productInfo = 'Verification order';
    $scope.txnid = makeid();
    $scope.amount = 234.99;
    $scope.id = '2222222';
    $scope.email = 'test@test.com';
    $scope.phone = 9999999999;
    $scope.lastName = 'test';
    $scope.firstName = 'fname';
    $scope.surl = "http://localhost:8080/checkout";
    $scope.hash = '';

    $scope.presubmit = function () {
        var data = { preHashString: $scope.mkey + '|' + $scope.txnid + '|' + $scope.amount + '|' + $scope.productInfo + '|' + $scope.firstName + '|' + $scope.email + '|' + $scope.id + '||||||||||' };
        
        $http.post('api/createHash', data).success(function (data, status) {
            console.log(status);
            if (status == 200) {
                document.getElementById('hash').value = data.hash;
                document.getElementById('paymentForm').submit();
            }
        });
    }
});



