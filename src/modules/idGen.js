function makeID(){
	const char = ["a","b","c","d","e","f","g","h","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0];
	const idMax = 7;
	let id = "";
	for(var i = 0, x = idMax; i < x; i++){
		id = id+toCapitalize(char[pickCharacter()]);
	}
	function pickCharacter(){
		return Math.floor(Math.random()*((char.length-1)-0+1)+0);
	}
	function toCapitalize(char){
		if(typeof char == "string" && Math.floor(Math.random()*(2-1+1)+1) > 1){
			return char.toUpperCase();
		} else{
			return char
		}
	}

	return id;
}


export default makeID;
