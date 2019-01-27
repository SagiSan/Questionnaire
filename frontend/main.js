var main = angular.module("main-app", ["ngRoute"]);
main.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/login.html",
        controller: "loginController"
      })
      .when("/home", {
        template: "hello world"
      });
  }
]);
main.controller("mainController", function($scope) {
  $scope.title = "Questionnaire";
  $scope.name = "";
});
