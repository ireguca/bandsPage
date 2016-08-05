var app = angular.module('music', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when ('/', {
			templateUrl: 'views/homeView.html',
			controller: 'HomeViewController'
		})
		.when ('/all',{
			templateUrl: 'views/decadeView.html',
			controller: 'HomeViewController'
		})
		.when ('/views/:decade', {
			templateUrl: 'views/decadeView.html',
			controller: 'HomeViewController'
		})
		.when ('/artist/:name', {
			templateUrl: 'views/bandView.html',
			controller: 'BandViewController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);


app.controller('HomeViewController', ['$scope', "$http", '$routeParams', function($scope, $http, $routeParams){
	
	$scope.decade = $routeParams.decade;

	$http.get('json/Bands_Json.json').success(function(data){
		$scope.bands=data;
	})	
}])//crear un controlador con un scope; hay que mentarlo en el html donde quieres que actue

app.controller('BandViewController', ['$scope', "$http", '$routeParams', function($scope, $http, $routeParams){
	$scope.name= $routeParams.name;
	$http.get('json/Bands_Json.json').success(function(data){
		$scope.bands=data;
	})	
}])

document.getElementById("searchButton").addEventListener("click", search);

function search() {
    document.getElementById("searchButton").innerHTML = "Soy vintage!";
}
