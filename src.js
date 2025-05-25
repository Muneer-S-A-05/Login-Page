function login(event){
	//document.getElementById("result").innerHTML="enter credentials"
	event.preventDefault();
	const user = document.getElementById("usr").value;
	const pass = document.getElementById("pss").value;
	if (user=="amrith" && pass=="iamnotluffy"){
		document.getElementById("result").style.color="green";
		document.getElementById("result").innerHTML="greetings ma darling!!";
	}
	else {
		document.getElementById("result").style.color="red";
		document.getElementById("result").innerHTML="go away creep!!";
	}
}