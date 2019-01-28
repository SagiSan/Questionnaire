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
      url: "/questionnaire",
      headers: tokenWrapper()
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
  $scope.deleteQuestionnaire = function(id) {
    $http({
      method: "DELETE",
      url: "/questionnaire/" + id,
      headers: tokenWrapper()
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
  if (auth($location)) {
    $scope.getQuestionnaires();
  }
});
