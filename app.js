var myApp = angular.module("myApp",[]);//no dependencies

myApp.controller("FirstCtrl",FirstCtrl);
myApp.controller("SecondCtrl",SecondCtrl);
myApp.controller("AvengersCtrl",AvengersCtrl);

myApp.factory('Data', function(){

        return {message: "I' data from a service"}

});

myApp.factory('Avengers', function(){

        var Avengers = {};
        Avengers.cast = [{name:"Steve",character:"Padolsky"},{name:"John",character:"Malkovych"},{name:"Stefany",character:"Green"}];
        return Avengers;

});

myApp.filter('reversed', function(Data){

        return function(text){
                return text.split("").reverse().join("") + Data.message;
        };

});


myApp.directive("leave",function(){

        return function(scope,element,attrs){
                element.bind("mouseleave",function(){
                        element.removeClass("leave "+ attrs.enter);
                });
        }

});

myApp.directive('superhero',function(){

        return {
                restrict:"E",
                template:"<div>Here is the superhero directive</div>"
        }

})

function FirstCtrl($scope, Data){

        $scope.data = Data;

}

function SecondCtrl($scope,Data){

        $scope.data = Data;

        $scope.reversedMessage = function(message){
               return message.split("").reverse().join("");
        }

}

function AvengersCtrl($scope,Avengers){

        $scope.avengers = Avengers;

}

myApp.controller("AppCtrl",function($scope){

        $scope.loadMoreTweets = function(){
                alert("Loading more twets!");
        }

});

myApp.directive("enter",function(){

        return function(scope,elem,attrs){
                elem.bind("mouseenter",function(){
                        scope.$apply(attrs.enter);
                })
        }

});


