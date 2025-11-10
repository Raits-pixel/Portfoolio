	$(document).ready(function(){ 
	$("#navhere").load("navbar.htm"); 
	$("#findbooks").click(function(){
	$("#table1").empty();    // make empty before next search 
	
	$.ajax({
	type: "GET",
	url: "books2.xml",
	dataType: "xml",
	success:function(data){
	$("#table1").append('<thead id="tbth"></thead><tbody id="tbtb"></tbody>');
	var h='<tr><th>Title</th><th>Publisher</th><th>Firstname</th><th>Lastname</th><th>Price</th><th>Year</th></tr>';
	$("#tbth").append(h);
	$(data).find('book').each(function(){
	var title=$(this).find('title').text();  // XML data
	var publisher= $(this).find('publisher').text();  // XML data
	var price= parseFloat($(this).find('price').text()); 
	var year= parseInt($(this).find('year').text()); 
	
	var firstname=""; var lastname="";
	var authArr=$(this).find('author');
	authArr.each(function(key,value){
	firstname=firstname+$(value).find('fname').text()+"<br>";
	lastname=lastname+$(value).find('lname').text()+"<br>";
	}); // end of author search
	
	printOK=true;
	
	var cat = $("#cat").val();  // selection from drop-down menu
	var catAtr = $(this).attr("category");
	if(cat!=catAtr && cat!="all")  
	     printOK=false;
	
	var lang = $("#lang").val();  // selection from drop-down menu
	var langAtr = $(this).find("title").attr("lang");
	if(lang!=langAtr && lang!="all")  
	     printOK=false;
	
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
	var r='<tr><td>'+title+'</td><td>'+publisher+'</td><td>'+firstname+'</td><td>'+lastname+'</td><td>'+price+'</td><td>'+year+'</td></tr>';
	$("#tbtb").append(r);
	}
	
	}); // end of find book(each)
	$("#table1").tablesort();

	},  // end of success part
	error:function(){alert("HELP...SOS");}
	
	});    // end of ajax
	
	
	});  // end of findbooks 
	
	});   // end of documenty ready