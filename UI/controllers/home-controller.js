APP.controller('HomeController', function ($scope, $http) {
    $scope.feedCat=()=>{
        let req= {
        }
    };

    let req={
        method: 'GET',
        url: 'http://localhost:3000/notifyUser'
    };
    $http(req)
        .then((res)=>{
            console.log(res.data);
            $scope.catAlert= res.data;
        })
        .catch((err)=>{
            console.log("something went wrong!")
         });


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
