/*var myApp = angular.module("myApp",[]);//no dependencies

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


var myApp = angular.module("superApp",[]);

myApp.directive("superhero",function(){

        return{
                restrict:"E",
                scope:{},
                controller:function($scope){
                        $scope.abilities = [];
                        this.addStrength = function(){
                                $scope.abilities.push("strength");
                        };
                        this.addSpeed = function(){
                                $scope.abilities.push("speed");
                        };
                },

                link: function(scope,elem,attrs){
                        elem.bind("mouseenter",function(){
                                console.log(scope.abilities);
                        });
                }
        }

});

myApp.directive("strength",function(){

        return{
                require:"superhero",


                link: function(scope,elem,attrs,sCtrl){
                        sCtrl.addStrength();
                }
        }

});

myApp.directive("speed",function(){

        return{
                require:"superhero",


                link: function(scope,elem,attrs,sCtrl){
                        sCtrl.addSpeed();
                }

        }

});



var myApp = angular.module('choreApp',[]);

myApp.controller("ChoreCtrl",function($scope){
        $scope.logChore = function(chore){
                alert(chore+" is done!");
        }
});

myApp.directive("kid",function(){
        return {
                restrict:"E",
                scope:{
                        done:"&"
                },
                template:"<input type='text' ng-model='chore'> {{chore}} <div ng-click='done({chore:chore})'>I am done!</div>"
        }
})
 */

var myApp = angular.module("app",[]);

myApp.controller("panelCtrl",function($scope){

});
myApp.run(function($templateCache){
    $templateCache.put("zippy.html","<head><meta charset='utf-8'></head> \
        <div> \
        Total zippyfication! yeah! \
    <div> ¯\\_(ツ)_/¯</div> \
    <h3 ng-click='toggleContent()'>{{title}}</h3><div ng-transclude ng-show='isContentVisible'></div> \
        </div>");
});

myApp.directive("zippy",function($templateCache){
      return {
              restrict:"E",
              transclude:true,
              scope:{title:"@"},
              templateUrl:"zippy.html",
                link: function(scope,elem,attrs){
                    scope.isContentVisible = true;
                    scope.toggleContent = function(){
                        scope.isContentVisible = !scope.isContentVisible;
                    }
                }
      }

});