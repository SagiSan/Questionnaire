function auth($location) {
  if (!sessionStorage.getItem("token")) {
    $location.path("/login");
    return false;
  }
  return true;
}

function tokenWrapper() {
  if (sessionStorage.getItem("token")) {
    return { Authorization: "Bearer " + sessionStorage.getItem("token") };
  }
}
