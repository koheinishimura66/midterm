prime = function(a){
	if(a == 1 || a == 0 || a < 0 || !a % 1 == 0){
		return false
	};
	var i =2
	while(i < a){
		isNumber= a / i
		if(isNumber % 1 == 0){
			return false
		}
		i = i + 1
	};
	return true
};