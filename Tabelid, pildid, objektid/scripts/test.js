$(document).ready(function(){
    $("#navsiia").load("nav.html");
    });
	
	function test()
	{
	let ok=true;  // eeldame et vigu ei ole
	regAvaldis=/idioot|loll|tobu|laisk|stupid|rumal/ig; // i-ignore case; g-global
	let x=document.getElementById("kom").value;
	let y=x.replace(regAvaldis,"*******");  
	document.getElementById("kom").value=y;
	
	valitudCBarv=0;
	if(document.getElementById("aeg1").checked==true)
	  valitudCBarv++;
	if(document.getElementById("aeg2").checked)
	  valitudCBarv++;
    if(document.getElementById("aeg3").checked)
	  valitudCBarv++;
	if(document.getElementById("aeg4").checked)
	  valitudCBarv++;
	// juurdepääs html elemendile on ka DOM abil, aga veel pikem: document.vormike.nimi.value
	
	if(valitudCBarv!=2)
	{
	   document.getElementById("cberror").innerHTML="Valige täpselt 2 aega!";
	   ok=false;
	}
	else
	   document.getElementById("cberror").innerHTML="";
	   
	let selectArv=0;
	let abi=document.getElementById("hobi");   
	let n=abi.options.length;
	
	for (let i=0; i<n; i++)
	{
	if(abi.options[i].selected)
	    selectArv++;
	}
	if(selectArv!=2)
	{
	document.getElementById("selecterror").innerHTML="Valige täpselt 2 hobi"
	ok=false;
	}
	else
	  document.getElementById("selecterror").innerHTML="";
	
	
	return ok;
	}
	
	function muudaVarv(){
	let varv=document.getElementById("tvarv").value;
	document.getElementById("art1").style.backgroundColor=varv;
	}