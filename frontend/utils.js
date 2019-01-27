function auth($location) {
  if (!sessionStorage.getItem("token")) {
    $location.path("/login");
    return false;
  }
  return true;
}
