$(document).ready(function(){
    $("#navsiia").load("nav.html");
    });
	
	function test2()
	{
	let ok=true;  // eeldame et vigu ei ole
	regAvaldis=/idioot|loll|tobu|laisk|stupid|rumal/ig; // i-ignore case; g-global
	let x=$("#kom").val();
	let y=x.replace(regAvaldis,"*******");  
	$("#kom").val(y);
	
	valitudCBarv=0;
	if($("#aeg1").is(':checked'))
	  valitudCBarv++;
	if($("#aeg2").is(':checked'))
	  valitudCBarv++;
    if($("#aeg3").is(':checked'))
	  valitudCBarv++;
	if($("#aeg4").is(':checked'))
	  valitudCBarv++;
	// juurdepääs html elemendile on ka DOM abil, aga veel pikem: document.vormike.nimi.value
	
	if(valitudCBarv!=2)
	{
	   $("#cberror").html("Valige täpselt 2 aega!");
	   ok=false;
	}
	else
	   $("#cberror").html("");
	   
	let selectArv=0;
	$("#hobi option:selected").each(function(){selectArv++;})
	
	if(selectArv!=2)
	{
	$("#selecterror").html("Valige täpselt 2 hobi");
	ok=false;
	}
	else
	  $("#selecterror").html("");
	
	return ok;
	}
	
	function muudaVarv(){
	let varv=$("#tvarv").val();
	$("#art1").css('background-color',varv);
	}