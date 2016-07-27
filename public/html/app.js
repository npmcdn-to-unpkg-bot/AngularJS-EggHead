var myApp = angular.module("app",["ngRoute"]);

myApp.factory('game',function(){
    return {
        title: "he he he"
    }
});
myApp.controller("appCtrl",function($scope,$injector){
  
   $injector.invoke(function(game){

        alert(game);
        $scope.game = game.title;

   });

});
