angular.module("CalculatorApp", [])
  .controller("CalculatorController", function ($scope) {
    $scope.operator = "+";

    $scope.result = function () {
      if ($scope.operator == "+") return $scope.a + $scope.b;
      if ($scope.operator == "-") return $scope.a - $scope.b;
      if ($scope.operator == "*") return $scope.a * $scope.b;
      if ($scope.operator == "/") return $scope.a / $scope.b;
    };
  });
