// Main function
document.getElementById("buttonSubmit").onclick = function () {
	var symbol = document.getElementById("textSymbol").value;
	var rows = document.getElementById("numberRowQt").value;
	var columns = document.getElementById("numberColQt").value;
	
	/*console.log("symbol: " + symbol);
	console.log("rows: " + rows);
	console.log("columns: " + columns);*/
	if(symbol !== '' && rows !== '' && columns !== '') {
		
		document.getElementById("myRectangle").innerHTML = "";
		for(let i = 0; i < rows; i++) {
			for(let j = 0; j < columns; j++) {
				document.getElementById("myRectangle").innerHTML += symbol + " ";
			}
			document.getElementById("myRectangle").innerHTML += "<br>";
		}
		
	} else {
		
		console.log("One of the variables were not defined!");
		
	}
	
}

