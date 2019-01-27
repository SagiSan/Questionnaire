main.controller("questionnairesListController", function(
  $scope,
  $http,
  $location
) {
  $scope.questionnairesList = [];
  $scope.title = "";
  $scope.createQuestionnaire = function() {
    $scope.questionnairesList.push($scope.title);
    $location.path("/create");
  };
});
