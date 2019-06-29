function clear_() {
	document.getElementById('display').value="0";
}
function append(value) {
	if(document.getElementById('display').value==0) document.getElementById('display').value="";
	document.getElementById('display').value=document.getElementById('display').value + value;
}
function evaluate_() {
	var eq=document.getElementById('display').value;
	if (eq!=null && eq!="") {
		eq=eq.replace("π","Math.PI");
		eq=eq.replace("euler","Math.E");
		eq=eq.replace("ln2","Math.LN2");
		eq=eq.replace("ln10","Math.LN10");
		eq=eq.replace("log2e","Math.LOG2E");
		eq=eq.replace("log10e","Math.LOG10E");
		eq=eq.replace("sqrt1_2","Math.SQRT1_2");
		eq=eq.replace("sqrt2","Math.SQRT2");
		eq=eq.replace("cos","Math.cos");
		eq=eq.replace("sin","Math.sin");		
		eq=eq.replace("abs","Math.abs");
		eq=eq.replace("acos","Math.acos");
		eq=eq.replace("asin","Math.asin");
		eq=eq.replace("atan","Math.atan");
		eq=eq.replace("atan2","Math.atan2");
		eq=eq.replace("ceil","Math.ceil");
		eq=eq.replace("exp","Math.exp");
		eq=eq.replace("floor","Math.floor");
		eq=eq.replace("log","Math.log");
		eq=eq.replace("max","Math.max");
		eq=eq.replace("min","Math.min");
		eq=eq.replace("pow","Math.pow");
		eq=eq.replace("random","Math.random");
		eq=eq.replace("round","Math.round");
		eq=eq.replace("sqrt","Math.sqrt");
		eq=eq.replace("tan","Math.tan");
		
		var result="not a number";
		try {
			eval(document.getElementById('funct').value+" "+"result="+eq);//evaluate functions then equation
		} catch(err) {
			txt="There was an error in your statement.\n";
			txt+="Error description: " + err.description + "\n";
			alert(txt);
			result="Error.";
  		}
		document.getElementById('display').value=result;
		document.getElementById('history').value=document.getElementById('history').value+eq+"\nResult="+result+"\n";//add to history
	}
}
function removewarning() {
	document.getElementById("warning").innerHTML="";
}
<!--for toggling purposes -->
let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('navbar-toggle');


navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});