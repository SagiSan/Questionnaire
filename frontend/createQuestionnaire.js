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
      question: $scope.question,
      answers: $scope.answers
    });
    $scope.question = "";
    $scope.answer = "";
    $scope.answers = [];
  };
});
