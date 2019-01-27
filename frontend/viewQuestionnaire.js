main.controller("viewQuestionnaireController", function(
  $scope,
  $http,
  $location,
  $routeParams
) {
  $scope.questionnaire = {};
  $scope.getQuestionnaire = function() {
    console.log($routeParams.id);
    $http({
      method: "GET",
      url: "/questionnaire/" + $routeParams.id
    }).then(
      function successCallback(response) {
        console.log(response.data);
        $scope.questionnaire = response.data;
      },
      function errorCallback(response) {
        console.log(response.data);
      }
    );
  };
  $scope.getQuestionnaire();
});
