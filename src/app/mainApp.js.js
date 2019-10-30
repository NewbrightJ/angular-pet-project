var app = angular.module('mainApp', ['ngAnimate']);

app.controller('mainCtrl', function($scope) {
	$scope.name, $scope.name2 = '';
	$scope.playerInformation = [{name: 'TestName1', rank: 'Iron IV', wins: '42'}, {name: 'TestName2', rank: 'Challenger', wins: '9001'}];
	$scope.show = false;

	$scope.compare = () => $scope.show = true;

	$scope.btnReady = false;
	$scope.checkNames = () => $scope.btnReady = ($scope.name1 && $scope.name2) ? true : false;

});

app.controller('httpCtrl', function($scope, $http) {		
	$scope.apiKey = 'RGAPI-9f9bb927-f665-4dad-83cb-0dcc2efaef13';
	$scope.baseUrl = 'https://na1.api.riotgames.com';
	$scope.extensionUrl = '/lol/summoner/v4/summoners/by-name/';
	$scope.summName = 'Newby1223';

	$scope.getSummonerByName = function(name) {
		$http.get($scope.url, $scope.config)
		.then(function(response) {
			//TODO - success
			console.log('Success!');
		}, function(response) {
			//TODO - error
			console.log('Oh no - something has gone terribly wrong!');
		});
	}

	$scope.url = $scope.baseUrl + $scope.extensionUrl + $scope.summName;
	$scope.config = {headers: {
		    'X-Riot-Token': $scope.apiKey
		}
	};

});