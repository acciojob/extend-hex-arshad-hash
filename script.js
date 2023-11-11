const extendHex = (shortHex) => {
  // write your code here
	// we have to create new string
	let hexCode="#";
	//read
	for (let i = 0; i <shortHex.length; i++) {
		if (shortHex.charAt(i)==="#"){
			continue;
			
		}
		else{
	hexCode=hexCode+shortHex.charAt(i)+shortHex.charAt(i);
		}
		
	}
	return hexCode;
};

// Do not change the code below.
 const shortHex = prompt("Enter Short Hex.");
 alert(extendHex(shortHex));
