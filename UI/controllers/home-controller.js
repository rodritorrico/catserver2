APP.controller('HomeController', function ($scope, $http) {
    $scope.feedCat=(response)=>{
        let req= { 
            method: 'POST',
            url:'http://localhost:3000/userWantsTofeedCat',
            data:{"resp": response}
        };
        $http(req)
        .then((res)=>{
           
        })
        .catch((err)=>{
        console.log("something went wrong!")
    });
    };

    let req={
        method: 'GET',
        url: 'http://localhost:3000/notifyUser'
    };
    $http(req)
        .then((res)=>{
            $scope.catAlert= res.data;
        })
        .catch((err)=>{
            console.log("something went wrong!")
         });


});
