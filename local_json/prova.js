angular.module('objectListApp', [])
.factory('objectservice', function ($http) {
  
  var objects = []; 
  
    return {
      objects: objects,
      
      load: function () {
        return $http
        .get('61439.json')
        .success(function (data) {
           objects.push.apply(objects, data);
        });
        
      },
      loadSingle: function (dc) {
        return $http.get('61439.json' + dc);
        
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
