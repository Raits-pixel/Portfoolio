		// here is used javascript for testing form
	$(document).ready(function(){ $("#nav").load("navbar.html"); });
	
	function test(){
	
	let ok=true; // we assume here is no errors
	let regExp=/idiot|loll|durak|stupid|bad|laisk|lenivoi/ig;  // i-ignore case, g-global
	let x = document.getElementById("com").value;
	let y = x.replace(regExp,"######");
	document.getElementById("com").value=y;
	
	cbCounter=0;
	if(document.getElementById("tv").checked==true)
	  cbCounter++;
	if(document.getElementById("skiing").checked)
	  cbCounter++;
    if(document.getElementById("reading").checked)
	  cbCounter++;
	if(document.getElementById("walking").checked)
	  cbCounter++;
	if(cbCounter!=2)
	{
		ok=false;
		document.getElementById("cberror").innerHTML="Select exactly 2 hoby";
	}
	else
	document.getElementById("cberror").innerHTML="";
	
	selectCounter=0;
	let temp=document.getElementById("training");
	let n =temp.options.length;
	for(let i=0; i<n;i++)
	{
		if(temp.options[i].selected)
			selectCounter++;
	}
	
	if(selectCounter!=2)
	{
		ok=false;
		document.getElementById("selecterror").innerHTML="Select exactly 2 trainings";
	}
	else
		document.getElementById("selecterror").innerHTML="";
	
	return ok;
	}
	
	function changeColor(){
		let color=document.getElementById("bgcolor").value;
		document.getElementById("art1").style.backgroundColor=color;
	}