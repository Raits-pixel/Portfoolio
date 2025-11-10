		// here is used javascript for testing form
	$(document).ready(function(){ $("#nav").load("navbar.html"); });
	
	function test(){
	
	let ok=true; // we assume here is no errors
	let regExp=/idiot|loll|durak|stupid|bad|laisk|lenivoi/ig;  // i-ignore case, g-global
	let x = $("#com").val();
	let y = x.replace(regExp,"######");
	$("#com").val(y);
	
	cbCounter=0;
	if($("#tv").is(':checked'))
	  cbCounter++;
	if($("#skiing").is(':checked'))
	  cbCounter++;
    if($("#reading").is(':checked'))
	  cbCounter++;
	if($("#walking").is(':checked'))
	  cbCounter++;
	if(cbCounter!=2)
	{
		ok=false;
		$("#cberror").html("Select exactly 2 hoby");
	}
	else
	 $("#cberror").html("");
	
	selectCounter=0;
	$("#training option:selected").each(function(){selectCounter++;});
	
	
	if(selectCounter!=2)
	{
		ok=false;
		$("#selecterror").html("Select exactly 2 trainings");
	}
	else
		 $("#selecterror").html('');
	
	return ok;
	}
	
	function changeColor(){
		let color=$("#bgcolor").val();
		$("#art1").css('background-color',color);
	}