var findFirstEvenNumber = function(a){
	if(a.length == 0){
		return null
	}else{
		var i =0
		while(i < a.length){
			number = a[i];
	    	if(number % 2 == 0){
	    		return number
	    	}
	    	i= i + 1
	    	
		}
    }
	return null
	
};

