<?php
include "conndb.php";
$bookstable=mysqli_query($conn,"select * from books");
$mainarray=[];

   while($row=mysqli_fetch_assoc($bookstable))
   {
	$bkid=$row["id"];
	$q="select * from authors join booksauthors on (authors.id=booksauthors.aid)";     
	$q=$q."join books on (books.id=booksauthors.bid) where books.id=".$bkid;  
	$authors=mysqli_query($conn,$q); // read authors  
	$authorsarray=[];   
	while($row2=mysqli_fetch_assoc($authors)) // create authors array
	{
		array_push($authorsarray,[
		   'Name'=>$row2['name'],
		   'Email'=>$row2['email'],
		   'Birthyear'=>$row2['birthyear'],
		   'Sex'=>$row2['sex']
		]);		
	}
     if($authorsarray!=null)
	 {
		array_push($mainarray,[
		   'ISBN'=>$row['ISBN'],
		   'Title'=>$row['title'],
		   'Publisher'=>$row['publisher'],
		   'Price'=>$row['price'],
		   'Year'=>$row['year'],
		   'Authors'=>$authorsarray
		]);		 	 
	 }		 
   }

   $result['BookList']=$mainarray;
   $resJson=json_encode($result);
   echo $resJson;   
?>