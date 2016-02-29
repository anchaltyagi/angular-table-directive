(function(module) {
  function showData() {
    var directive = {
      restrict: 'E',
      template: '<table> ' +
        '<tbody>' +
        '<tr>' +
        '<th ng-repeat="(key, value) in data[0]">{{key}}</th>' +
        '</tr> ' +
        '<tr ng-repeat="item in data">' +
        '<td ng-repeat="(key, value) in item">{{value}}</td>' +
        '</tr> ' +
        '</tbody>' +
        '</table>'
    };
    return directive;
  }
  module.directive('showData', showData);
})(angular.module('testApp'));