main.controller("questionnairesListController", function(
  $scope,
  $http,
  $location
) {
  $scope.questionnairesList = [];
  $scope.createQuestionnaire = function() {
    $location.path("/create");
  };
  $scope.getQuestionnaires = function() {
    $http({
      method: "GET",
      url: "/questionnaire"
    }).then(
      function successCallback(response) {
        console.log(response.data);
        $scope.questionnairesList = response.data;
      },
      function errorCallback(response) {
        console.log(response.data);
      }
    );
  };
  $scope.open = function(id) {
    $location.path("view/" + id);
  };
  $scope.getQuestionnaires();
});
