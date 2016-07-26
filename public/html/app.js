
var myApp = angular.module("app",["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"app.html",
        controller:"viewCtrl",
        resolve:{
           loadData:myViewCtrl.loadData
        }
    });

});
myApp.controller("appCtrl",function($rootScope){

    $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
        console.log(rejection);
    });

   
});


var myViewCtrl = myApp.controller("viewCtrl",function($scope){
    $scope.model = {
        message: "Hi!"
    }
});

myViewCtrl.loadData = function($q,$timeout){

    var defer = $q.defer();
    $timeout(function(){
        defer.reject("Failed to load data");
    },2000);
    return defer.promise;

}