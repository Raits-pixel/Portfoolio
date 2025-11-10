
<!DOCTYPE html>
<html lang="en">
  
  
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="utf-8">
	<meta name="keywords" content="HTML5, php, web development">
    <meta name="description" content="We are developing web solutions using HTML5, javascript, PhP, Java, etc">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<link href="../styles/style1.css" rel="stylesheet">
	
    <title>Add books and authors data to database</title>
    <style>
	body{padding-top:50px; padding-bottom:50px;}
	html{scroll-padding-top: 55px;}
	</style>
    <script>
	$(document).ready(function(){ $("#navhere").load("../navbar.htm"); });
	</script>
  
  
  
  </head>
  <body>
  <div id="navhere"></div>
 <header>
    <h1>Add books and authors data to database</h1>
 </header>     
 <?php
 if(isset($_POST["isbn"])) // send time in server with full data
    {  
	 include "conndb.php";
     $title=test_data($_POST["title"]);  // book data from HTML form
     $publisher=test_data($_POST["publisher"]);
     $isbn=test_data($_POST["isbn"]);
     $price=test_data($_POST["price"]);
     $year=test_data($_POST["year"]);
	 
	 $sql="select * from books where ISBN='$isbn'";  // 
	 $result=$conn->query($sql);
	 $numrows=$result->num_rows;
     if($numrows==0)    // this book does not exist in database
	  {
	    $sql2="insert into books (ISBN,title,publisher,price,year) values (?,?,?,?,?)"; 
	    $sql3=$conn->prepare($sql2);
	    $sql3->bind_param("sssdi",$isbn,$title,$publisher,$price,$year);
		$sql3->execute();
		$bookid = $conn->insert_id; // ask bookid for adding data to booksauthors 
		
		$n=$_POST["nrauth"];
		for($i=1; $i<=$n; $i++)   // adding authors
		{
		$name=test_data($_POST["name".$i]);
		$email=test_data($_POST["email".$i]);
		$byear=test_data($_POST["byear".$i]);
		$sex=test_data($_POST["sex".$i]);
	//	echo "name=".$name." email=".$email." byear".$byear." sex=".$sex;
		 $sql5="select id from authors where email='$email'"; // author exist in db?
		 $result2=$conn->query($sql5);
	     $numrows2=$result2->num_rows;   // value may be 1(exists) or 0(missing)
		  if($numrows2==0)   // author is not existing in database, we will add
		  {
		  $sql7="insert into authors (name,email,birthyear,sex) values (?,?,?,?)"; 
		  
		  $sql8=$conn->prepare($sql7);
	      $sql8->bind_param("ssis",$name,$email,$byear,$sex);
		  $sql8->execute();
		 $authorid = $conn->insert_id;
		 }
		 else 
		 {
		  $row=mysqli_fetch_assoc($result2);
		  $authorid=$row["id"];
		 }
		 $sql="insert into booksauthors (bid,aid) values ('$bookid','$authorid')";
		 $r=$conn->query($sql);
		}
		$sql3->close();
		$conn->close();
	  }
	  else
	      echo "Books with ISBN ".$isbn." already exist in database";
	  unset($_POST["isbn"]);
      unset($_POST["nrauth"]);
   }
   
function test_data($data){
	$data=trim($data);
	$data=stripslashes($data);
	$data=htmlspecialchars($data);
	return $data;
    } 
?> 
<article>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);  ?>" method="post">
<div class="row">
<label class="col-sm-1 col-form-label">Number of Authors</label> 
<div class="col-sm-4">
<input id="nrauth" name="nrauth" type="number" value="<?php if( isset($_POST["nrauth"]) ) echo $_POST["nrauth"]; ?>" required >
</div></div> <br>
<?php
if( isset($_POST["nrauth"]) )
{
$n=$_POST["nrauth"];
echo 
'<div class="row mt-3">
<label class="col-sm-1 col-form-label">ISBN:</label>
<div class="col-sm-4">
<input name="isbn" type="text" value="" required></div></div>   

<div class="row mt-3">
<label class="col-sm-1 col-form-label">Title:</label>
<div class="col-sm-4">
<input name="title" type="text" value="" required></div></div>   

<div class="row mt-3">
<label class="col-sm-1 col-form-label">Publisher:</label>
<div class="col-sm-4">
<input name="publisher" type="text" value="" required></div></div> 

<div class="row mt-3">  
<label class="col-sm-1 col-form-label">Price:</label>
<div class="col-sm-4">
<input name="price" type="number" step="0.01" value="" required></div></div>  

<div class="row mt-3"> 
<label class="col-sm-1 col-form-label">Release year:</label>
<div class="col-sm-4">
<input name="year" type="number" value="" required></div></div><br>';


for($i=1; $i<=$n; $i++)   // loop through authors
  {
  echo
  "Authors $i data<br>
  <div class='row mt-3'>
  <label class='col-sm-1 col-form-label'> Name:</label>
  <div class='col-sm-4'>
  <input id='name$i' name='name$i' type='text' value='' required ></div></div>    
  
  <div class='row mt-3'>
  <label class='col-sm-1 col-form-label'> Email:</label>
  <div class='col-sm-4'>
  <input id='email$i' name='email$i' type='text' value='' required ></div></div> 
  
  <div class='row mt-3'>
  <label class='col-sm-1 col-form-label'> Birt Year:</label>
  <div class='col-sm-4'>
  <input id='byear$i' name='byear$i' type='number' value='' required ></div></div>  
  
   <div class='row mt-3'>
  <label class='col-sm-1 control-label'> Sex:</label>
  <div class='col-sm-4'>
       <input name='sex$i' type='radio' value='W' required >Woman
       <input name='sex$i' type='radio' value='M' required >Man</div></div><br><br>";
  }
}
?>

<input type="submit" value="Submit" name="submit"><br>
</form>
</article>
 

 
  <footer class="fixed-bottom">
  &copy; Copyright. Fox. All rights reserved. <br> Tallinn Suur Sõjamäe 10A
  </footer>
  </body>
  
</html>
