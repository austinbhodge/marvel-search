'use strict';

angular.module('marvel', [])
  .controller('HeroController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Jessica";

    function fetch(){
      $http.get("https://gateway.marvel.com:80/v1/public/characters?nameStartsWith=" + $scope.search + "&apikey=98ee8633afd874c9d8ab3a5f318bf166")
      .then(function(response){ $scope.details = response.data.results; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
