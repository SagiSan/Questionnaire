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
        localStorage.setItem("is_admin", response.data.isAdmin);
        localStorage.setItem("token", response.data.token);
        console.log(response);
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };
  $scope.signIn = function() {
    $http({
      method: "POST",
      url: "/auth/register",
      data: {
        username: $scope.username,
        password: $scope.password
      }
    }).then(
      function successCallback(response) {
          $location.path("/home");
        console.log(response);
      },
      function errorCallback(response) {
        $location.path("/login");
        console.log(response);
      }
    );
  };
});
