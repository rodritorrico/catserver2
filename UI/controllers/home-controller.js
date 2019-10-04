APP.controller('HomeController', function ($scope, $http) {
    $scope.generarBoletas = ()=>{
    
        let req = {
            method : 'POST',
            url: URL + LISTAR_BOLETAS,
            data : JSON.stringify(date)
        };
        $http(req)
            .then((res)=>{
                $scope.listadeBoletas = res.data;
            })
        .catch((err)=>{
            console.log("something went wrong!")
        });
    }

});
