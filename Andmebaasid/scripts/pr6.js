	$(document).ready(function(){ 
	$("#navhere").load("navbar.htm"); 
	$("#findbooks").click(function(){
	$("#table1").empty();    // make empty before next search 
	
	$.ajax({
	type: "GET",
	url: "books3.json",
	dataType: "json",
	success:function(data){
	
		
	$("#table1").append('<thead id="tbth"></thead><tbody id="tbtb"></tbody>');
	var h='<tr><th>Title</th><th>Publisher</th><th>Price</th><th>Year</th><th>Name</th><th>Age</th><th>Sex</th></tr>';
	$("#tbth").append(h);

	
	
	$.each(data.BookList,function(key,value){
	var title=value.Title;  // json data
	var publisher= value.Publisher;  // json data
	var price= value.Price;   // json data
	var year= value.Year;     // json data
	
	var massiiv=[];
	$.each(value.Authors,function(key2,value2){
		
		massiiv.push({Name:value2.Name,Age:value2.Age,Sex:value2.Sex});
	});
	
	
	printOK=true;
	
	var minyear = $("#minYear").val(); // from html field MinYear
	var maxyear = $("#maxYear").val(); // from html field MaxYear
	if(minyear.length>0 && year<parseInt(minyear))
	    printOK=false;
	if(maxyear.length>0 && year>parseInt(maxyear))
	    printOK=false;
	
	var minprice = $("#minPrice").val(); // from html field MinPrice
	var maxprice = $("#maxPrice").val(); // from html field MaxPrice
	if(minprice.length>0 && price<parseFloat(minprice))
	    printOK=false;
	if(maxprice.length>0 && price>parseFloat(maxprice))
	    printOK=false;
	
	// make filter by price: individual work
	
	if(printOK)
	{
	var r='<tr><td>'+title+'</td><td>'+publisher+'</td><td>'+price+'</td><td>'+year+'</td>';
	var strName="";  var strAge="";  var strSex="";
	$.each(massiiv,function(key3,value3){
		strName=strName+value3.Name+'<br>';
		strAge=strAge+value3.Age+'<br>';
		strSex=strSex+value3.Sex+'<br>';
	});
	
	
	
	r=r+'<td>'+strName+'</td><td>'+strAge+'</td><td>'+strSex+'</td></tr>';
	$("#tbtb").append(r);
	}
	
	}); // end of find book(each)

	$("#table1").tablesort();

	},  // end of success part
	error:function(){alert("HELP...SOS");}
	
	});    // end of ajax
	
	
	});  // end of findbooks 
	
	});   // end of documenty ready