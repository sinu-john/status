var module=angular.module('myApp',['ngAnimate']);

module.factory('service',function(){
	var data={};
	
	data={
	"name": "First Last",
	"m":5,
	"k":1,
	"online": false,
	"starttime":1404843592,
	"timenow": 1404863592, 
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
				console.log(stat);
			}
		},
		isNight:function(){
			if(data.timenow>data.timenight){
				return true;
			}
			else{
				return false;
			}
		},
		setPosition:function(k){
		    data.k=k;
		}
	};
});

module.controller('statusCtrl',function($scope,$filter,service){
	$scope.stat="a";
	$scope.allStatus=[{'Name':'Status A','status':'a'},
					{'Name':'Status B','status':'b'},
					{'Name':'Status C','status':'c'},
					{'Name':'Status D','status':'d'}];
	service.setStatus($scope.stat);
	$scope.data=service.getData();
	$scope.isNight=service.isNight();
	console.log($scope.isNight);
	$scope.flip=function(flip){
	var a=document.getElementById('flipper');
        if(flip){
            a.className=a.className+" flip";
        }
        else{
            a.className=a.className.replace(' flip','');
        }
	};
	
	$scope.position=function(increment){
	    if(increment=="minus" && $scope.data.k>1){
	        service.setPosition(--$scope.data.k);
	    }
	    else if(increment=="plus" && $scope.data.k<5){
	        service.setPosition(++$scope.data.k);
	    }
	};
});