app.controller('MainController', ['$scope', function($scope) { 
  
  
  $scope.titolo = 'Angular1_phaidra '; 
  
  
  $scope.schede = 'Schede';
 
  
  $scope.oggetti = [
  	{ 
    	name: 'Echte Ananas (Ananassa sativa Lind.) - Amerikanische Agave (Agave americana L.)', 
     	cover: 'https://fc.cab.unipd.it/fedora/get/o:61439/bdef:Content/get',
		download:'down.php'
    	
  	}, 
  	{ 
    	name: 'b',    	 
    	cover: '',
    	
  	}, 
  	{ 
    	name: 'c',     	
    	cover: '',
    	
  	}, 
  	{ 
    	name: 'd',     	
    	cover: '',
    	
  	}
  ];
  }
  ]
  );
