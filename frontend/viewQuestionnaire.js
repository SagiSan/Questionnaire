main.controller("viewQuestionnaireController", function(
  $scope,
  $http,
  $location,
  $routeParams
) {
  $scope.questionnaire = {};
  $scope.answers = [];
  $scope.getQuestionnaire = function() {
    $http({
      method: "GET",
      url: "/questionnaire/" + $routeParams.id,
      headers: tokenWrapper()
    }).then(
      function successCallback(response) {
        $scope.questionnaire = response.data;
      },
      function errorCallback(response) {
        console.log(response.data);
      }
    );
  };
  $scope.onSubmit = function() {
    $http({
      method: "POST",
      url: "/submission/" + $routeParams.id,
      data: $scope.answers,
      headers: tokenWrapper()
    }).then(
      function successCallback(response) {
      },
      function errorCallback(response) {
      }
    );
    $location.path("/home");
  };

  if (auth($location)) {
    $scope.getQuestionnaire();
  }
});
