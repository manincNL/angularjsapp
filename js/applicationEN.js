(function(){
	var app = angular.module('resume', ['ngSanitize']);

	app.controller('ProfielController', function(){
		this.profielen = rollen;
		this.profInfo = 7;
		this.selectedProfInfo = function(setProfInfo) {
			this.profInfo = setProfInfo;
		};
		this.isSelectedProfInfo = function(checkProfInfo) {
			return this.profInfo === checkProfInfo;
		};
	});
  
	app.controller('OpdrachtController', function(){
		this.opdrachten = jobs; 
		this.jobInfo = 500;
		this.subSet = 5;
		this.selectedJobInfo = function(setJobInfo) {
			this.jobInfo = setJobInfo;
		};
		this.selectedSubSet = function(setSubSet) {
			this.subSet = setSubSet;
		};
		this.isSelectedJobInfo = function(checkJobInfo) {
			return this.jobInfo === checkJobInfo;
		};
		this.isSelectedSubSet = function(checkSubSet) {
			return this.subSet === checkSubSet;
		};
	});
  
	app.controller('AanbevelingController', function() {
		this.aanbevelingen = recoms
		this.rcInfo = 1000;
		this.selectedRCInfo = function(setRCInfo) {
			this.rcInfo = setRCInfo;
		};
		this.isSelectedRCInfo = function(checkRCInfo) {
			return this.rcInfo === checkRCInfo;
		};
	});
  
	app.directive('appHeader', function() {
		return {
			restrict: "E",
			templateUrl: '/include/app-header-en.html'
		};
	});

	app.directive('appProfile', function() {
		return {
			restrict: "E",
			templateUrl: '/include/app-profile-en.html' 
		};
	});
	
	app.directive('appOpdracht', function() {
		return {
			restrict: "E",
			templateUrl: '/include/app-opdracht-en.html'
		};
	});
	
	app.directive('appAanbeveling', function() {
		return {
			restrict: "E",
			templateUrl: '/include/app-aanbeveling-en.html'
		};
	});
	
})();
