var myApp = angular.module("app",["ngRoute"]);

myApp.provider("game",function(){
    var type;
    return {
        setType:function(value){
            type = value;
        },
        $get:function(){
            return {
                title:type + "Game"
            }
        }
    }
});

myApp.config(function(gameProvider){
    
    gameProvider.setType("He he he");

});
myApp.controller("appCtrl",function($scope,game){
  
   $scope.game = game.title;

});
