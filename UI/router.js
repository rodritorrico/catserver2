const URL = 'http://localhost:3000';

APP.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './views/home.html',
            controller : 'HomeController'
        })

});
