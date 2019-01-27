main.controller("loginController", function($scope, $http, $location) {
  $scope.title = "login";
  $scope.username = "";
  $scope.password = "";
  $scope.formSubmit = function() {
    $http({
      method: "POST",
      url: "/auth/login",
      data: {
        username: $scope.username,
        password: $scope.password
      }
    }).then(
      function successCallback(response) {
        sessionStorage.setItem("is_admin", response.data.isAdmin);
        sessionStorage.setItem("token", response.data.token);
        $location.path("/home");
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };
  $scope.signUp = function() {
    $http({
      method: "POST",
      url: "/auth/register",
      data: {
        username: $scope.username,
        password: $scope.password
      }
    }).then(
      function successCallback(response) {},
      function errorCallback(response) {
        $location.path("/login");
      }
    );
  };
});
