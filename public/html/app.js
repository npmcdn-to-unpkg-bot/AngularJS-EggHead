var myApp = angular.module("app",["ngRoute"]);



myApp.directive("country",function(){
    return {
        restrict:"E",
         
        controller:function(){
            this.sayAboutCountry = function(){
                console.log("Alabaha");
                return "Alabaha";
            }
        }
    }
});
myApp.directive("state",function(){

        return {
            restrict:"E",
            require:"^country",
          
            controller:function(){
                this.sayAboutState = function(){
                    console.log("OgaPoga");
                    return "OgaPoga";
                }
            }
        }

});
myApp.directive("city",function(){
        return {
            restrict:"E",
            require:["^country","^state"],
            template:"<div style='cursor:pointer' ng-click='he()'>He</div>",
            link:function(scope,elem,attrs,ctrl){
                scope.he = function(){
                    var c = ctrl[0].sayAboutCountry();
                    var s = ctrl[1].sayAboutState();
                    console.log(c+" "+s);
                };
              
            }
        }
    
    });