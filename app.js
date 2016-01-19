//var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
//
//
//
//
//myApp.controller('mainController', function($scope, $log, $filter, $resource) {
//    
//    console.log($resource);
//    
//});

(function(){
  //Module
  angular 
    .module('myApp', ['ngMessages', 'ngResource', 'ngRoute'])
    .config(routeFunction)
    .controller('MainController', MainController)
    .service('nameService', nameService)
  
  //Router
  routeFunction.$inject = ['$routeProvider'];
  
  function routeFunction($routeProvider){
    $routeProvider.when('/', {
      templateUrl:
      controller:
      controllerAs:
    })
    .when('/:something',{
      templateUrl:,
      controller:
      controllerAs:
    })
  }
    
  //Controller
  MainController.$inject = ['$routeParams', '$scope', '$log', 'nameService'];
  
  function MainController($routeParams, $scope, $log, nameService){
    $scope.someParams = $routeParams.something;
    
    $scope.name = nameService.name;
    $scope.$watch('name', function(){
      nameService.name = $scope.name;
    });
    
    nameService.name;
    nameService.nameLength();
    
    //Event loop and Digest loop are different. To tell the digest loop to watch for something in the event loop, use $scope.$apply
    setTimeout(function(){
      $scope.$apply(function(){
        $scope.name = 'This is a timeout';
        console.log('name scope has changed!');        
      });
    }, 3000);
  }
  
  //Service
  function nameService(){
    var self = this;
    
    this.name = 'John Doe';
    this.nameLength = function(){
      return self.name.length;
    }
  }
  
})();