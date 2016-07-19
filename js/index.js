// create an application 
// this will get attached to the body of html
var app = angular.module("myCounter", []);


app.controller("calcControl", function($scope) {
    // start at 0 
    $scope.counter = 0;
    $scope.colorType = 3;
    // go back to zero  
    $scope.colorChoice = function(){
    	if($scope.counter<0){
    		$scope.colorType=1;
    	}else if($scope.counter>100){
    		$scope.colorType=2;
    	}else{
    		$scope.colorType=3;
    	}
    };
      // add decrement function - decreases counter
    $scope.decrement = function() {
    	$scope.counter--;
    	$scope.colorChoice();
    };
    // add incrementer - this increases counter
    $scope.increment = function(){
    	$scope.counter++;
    	$scope.colorChoice();
    };
     $scope.zeroOut = function(){
    	$scope.counter=0;
    	$scope.colorChoice();
    };
     $scope.hundredOut = function(){
    	$scope.counter=100;
    	$scope.colorChoice();
    };


});