(function(module) {
  function mainController($scope) {
    // test data 1
    //   $scope.data = [{
    //     name: "Anchal",
    //     job: "Software"
    //   }, {
    //     name: "Anju",
    //     job: "Finance"
    //   }];
    // test data 2
    $scope.data = [{
      "firstName": "John",
      "lastName": "Doe",
      "age": 36
    }, {
      "firstName": "Anna",
      "lastName": "Smith",
      "age": 42
    }, {
      "firstName": "Peter",
      "lastName": "Jones",
      "age": 65
    }];
  }
  mainController.$inject = ['$scope'];
  module.controller('mainController', mainController);
})(angular.module('testApp'));