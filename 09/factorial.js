factorial=function(a){
	if(a==0 || a < 0){
		return null
	}else if(a % 1 ==0){
        var i =1
        var kai=1
		while(i < a + 1){
			kai = kai*i
		    i = i + 1
		}
	    return kai	
	}else if(a>0){
		hasuu = a % 1
		isNumber = a - hasuu
		var n = 1
		var sei_kai=1
		while(n < isNumber + 1){
			sei_kai = sei_kai*n
		    n = n + 1
		}
	    return sei_kai  
	}else{
		return null
	}
}