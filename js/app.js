angular.module('app', ['ngResource','ngRoute','ngSanitize'])
.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/home',  { templateUrl: '/garage-store/templates/home.html', controller: 'homeCtrl'})
        .when('/about',  { templateUrl: '/garage-store/templates/about.html', controller: 'emptyCtrl'})
        .otherwise({redirectTo: '/home'});
}])
.factory('Items', ['$resource',function($resource){
    return $resource("/garage-store/json/items.json");
}])
.controller('homeCtrl', function($scope,Items,$routeParams){
    $scope.search = {vendido:false};
    $scope.items = Items.query();

    $scope.select = function (item){
        $scope.selected = item;
        $("#myModal").modal()
    }
})
.controller('emptyCtrl', function($scope,$routeParams){})
;
