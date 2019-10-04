APP.controller('HomeController', function ($scope, $http) {
<<<<<<< HEAD
    $scope.feedCat=()=>{
        let req= {
        }
    };

    let req={
        method: 'GET',
        url: 'http://localhost:3000'
    };
    $http(req)
        .then((res)=>{
            $scope.catAlert= res.data;
        })
        .catch((err)=>{
            console.log("something went wrong!")
         });


=======
>>>>>>> ed80e18643e765cf63c47504de7b02a59eafa714
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
