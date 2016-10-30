(function() {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckerController', LunchCheckerController );

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.dishesListString = "";
    $scope.msg = "";
    $scope.performCheck = function(){
      var nbrOfDishes = getNumberOfDishes( $scope.dishesListString );
      $scope.message = getMessageToDisplay( nbrOfDishes );
    };

    /*
    this function returns the number of comma separated items in the
    parameter string.
    returns 0 if the list is empty ("" or " ")
    returns 1 or more if the list is not empty
    */
    function getNumberOfDishes(string){
      var nbrOfDishes = 0;
      if( string == "" ){
        nbrOfDishes = 0;
      }
      else{
        // get all comma separated elements of the list
        var list = string.split(',');
        nbrOfDishes = list.length;
      }

      return nbrOfDishes;
    };


    /*
    this function returns a specific message depending on the
    number passed as parameter:
    if 0          : return "Please enter data first"
    if 1,2,3      : return "Enjoy!"
    if more than 3: return "Too much!"
    */
    function getMessageToDisplay(nbr){
      var msg = "";
      if( nbr == 0 ){
        msg = "Please enter data first";
      }
      else if( nbr > 3 ){
        msg = "Too much!";
      }
      else{
        msg = "Enjoy!";
      }

      return msg;
    };
  };
}());
