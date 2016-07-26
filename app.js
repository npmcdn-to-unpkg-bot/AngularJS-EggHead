
var myApp = angular.module("app",[]);

myApp.config(function($route){
    $route.when('/',
        {
            templateUrl:"app.html",
            controller:"appCtrl"
        }
    );


});
myApp.controller("appCtrl",function($scope){
    $scope.model = {
        message: "routing ng-view"
    }
});

myApp.controller("viewCtrl",function($scope,$route){
    
    
    
});

