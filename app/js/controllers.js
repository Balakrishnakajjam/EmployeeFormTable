'use strict';

/* Controllers */

var App = angular.module('employeeApp', []);

App.controller('employeeListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://weathered-surf-2534.getsandbox.com/getEmployeeData').success(function(data) {
  	


    $scope.employees = data;

  });
  $http.get('http://weathered-surf-2534.getsandbox.com/getEmployeeDatas').success(function(data1) {
  	$scope.employees1=data1;

  });

}]);


