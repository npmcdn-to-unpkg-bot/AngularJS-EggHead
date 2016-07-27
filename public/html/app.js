
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

myApp.directive("error",function($rootScope){
    return {
        restrict:"E",
        template:"<div ng-show='isError' style='position: relative;color: white;background-color:red;text-align: center;width: 100%;height: 25px;font-weight: bold;font-size: 20px;border-radius: 5px;'>Error</div>",
        link:function(scope){

            $rootScope.$on("$routeChangeError",function(ev,cur,prev,rej){
                scope.isError = true;
            });

        }
    }
});
myApp.controller("appCtrl",function($rootScope){
  
   
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