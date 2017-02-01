// commento modificato
angular.module('objectListApp', [])
.factory('objectservice', function ($http) {
  
  var objects = []; 
  
    return {
      objects: objects,
      
      load: function () {
        return $http
        .get('http://phaidradev.cab.unipd.it/api/object/o:53204/dc')
        .success(function (data) {
           objects.push.apply(objects, data.metadata.dc);
        });
        
      },
      loadSingle: function (dc) {
        return $http.get('http://phaidradev.cab.unipd.it/api/object/o:53204/dc' + dc);
        
      }
      
    };
})
.controller('objectsController', function ($scope, objectservice) {
  
  $scope.objects = objectservice.objects;
  
  $scope.currentobject = null;
  
  $scope.showobject = function (dc) {
    if (dc) {
      objectservice.loadSingle(dc).success(function (data) {
        $scope.currentobject = data;
      });
    } else {
      $scope.currentobject = null;
    }
    
  };
  
  objectservice.load();
 
  
});
