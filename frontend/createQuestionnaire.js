main.controller("createQuestionnaireController", function(
  $scope,
  $http,
  $location
) {
  $scope.questionList = [];
  $scope.title = "";
  $scope.description = "";
  $scope.question = "";
  $scope.answers = [];
  $scope.answer = "";
  $scope.createQuestionnaire = function() {
    $scope.questionnairesList.push($scope.title);
  };
  $scope.addAnswer = function() {
    $scope.answers.push({ text: $scope.answer });
  };
  $scope.addQuestion = function() {
    $scope.questionList.push({
      text: $scope.question,
      answers: $scope.answers
    });
    $scope.question = "";
    $scope.answer = "";
    $scope.answers = [];
  };
  $scope.save = function() {
    $http({
      method: "POST",
      url: "/questionnaire",
      data: {
        title: $scope.title,
        description: $scope.description,
        questionList: $scope.questionList
      }
    }).then(
      function successCallback(response) {
        console.log(response);
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };
});
