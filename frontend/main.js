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
        templateUrl: "/questionnairesList.html",
        controller: "questionnairesListController"
      })
      .when("/create", {
        templateUrl: "/createQuestionnaire.html",
        controller: "createQuestionnaireController"
      });
  }
]);
main.controller("mainController", function($scope) {
  $scope.title = "Questionnaire";
  $scope.name = "";
});
