 $(document).ready( function(){

	  $("#navbar").load("navbar.htm"); 
	  
	  $("#calculate").click(function(){
		    
           var count= $("#count").val().trim();
           let price= $("#price").val().trim();
           var coef= $("#coef").val().trim();
		  var gender=$("input[name='gender']:checked").val();
		 //    alert(count+"   "+price+"   "+coef+"   "+gender);   
		   var rus=$("input[name='rus']:checked").val(); // as radio button
		   var eng=$("#eng:checked").val();  // simpler approach
			
		 var course=$("#courses option:selected").val();  // Select
			 
	     var com= $("#com").val().trim(); 
			
        if(count=="")
			$("#ercount").html("count is compolsory!");
        else
            $("#ercount").html('');

        if(price=="")
			$("#erprice").html("price is compolsory!");
        else
            $("#erprice").html('');
			
		if(coef=="")
			$("#ercoef").html("price is compolsory!");
        else
            $("#ercoef").html('');	
			
		if(count!='' && price!='' && coef!='')	
		{    // no errors , send data to server
           // alert("personal data: "+rus+" "+eng+" "+course+" "+com);   	
			$.post("calculate_expenses.php",
			{
				count: count,
				price: price,
				coef: coef,
				gender: gender,
				rus: rus,
				eng: eng,
				course: course,
				com: com
			},
			function(data,status)
			{
				$("#results").html(data);
			});
		}  // end of if , 
				
			
		  });  // end of click actions	  
	 
	});