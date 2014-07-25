var module=angular.module('myApp',['ngAnimate']);

module.factory('service',function(){
	var data={};
	
	data={
	"name": "First Last",
	"online": false,
	"starttime":1404843592,
	"timenow": 1404843592, 
	"timelastseen": 1404843078, 
	"timemorning": 1404806676, 
	"timenight": 1404857376, 
	"id": 123,
	"level": 4,
	"status": {
	"a": "green",
	"b": "green",
	"c": "green",
	"d": "green",
	},
	"xstring": "prk" 
	};

	return {
		getData: function(){
			return data;
		},
		setStatus: function(stat){
			switch(stat){
				case 'a':data.status.a="yellow";break;
				case 'b':data.status.b="yellow";break;
				case 'c':data.status.c="yellow";break;
				case 'd':data.status.d="yellow";break;
				default:data.status.a="yellow";
			}
		},
		isNight:function(){
			if(data.timenow>data.timenight){
				return true;
			}
			else{
				return false;
			}
		}
	}
});

module.controller('statusCtrl',function($scope,$filter,service){
	$scope.stat="a";
	$scope.allStatus=[{'Name':'Status A','status':'a'},
					{'Name':'Status B','status':'b'},
					{'Name':'Status C','status':'c'},
					{'Name':'Status D','status':'d'}];
	$scope.data=service.setStatus($scope.stat);
	$scope.data=service.getData();
});