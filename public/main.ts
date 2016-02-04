var app = angular.module('app', []);

interface ExampleScope extends angular.IScope {
  message: string;
}

class ExampleController {
  static $name = "ExampleController";
  static $inject = ["$scope"];

  constructor(private $scope: ExampleScope) {
    this.$scope.message = "Example message";
  }
}

app.controller(ExampleController.$name, ExampleController);