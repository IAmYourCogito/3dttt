// find way to link MC list in html with variables in js



var app = angular.module("homepage", []);
var vlist = 0;

app.controller("voxelcontroller", function($scope){
		// $scope.voxel;//first is blank, o, or x. second is row, third is column, fourth is plane
		$scope.box = [{name: "o", value: 0},{name: "x", value: 1}];
		$scope.row = [{name:"1", value: 0}, {name:"2",value:1},{name:"3", value:2},{name:"4",value:3}];
		$scope.column = [{name:"a", value: 0}, {name:"b",value:1},{name:"c", value:2},{name:"d",value:3}];
		$scope.plane = [{name:"i", value: 0}, {name:"ii",value:1},{name:"iii", value:2},{name:"iv",value:3}];
	this.playmove = function(){
		var voxel= 
		vlist++;
		// console.log($scope.voxel);
		console.log(vlist);
	};
	this.winchecker = function(){
		for (vlist2 = vlist; vlist2 >= 0; vlist2--) {};
	}
});

