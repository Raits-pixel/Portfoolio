<?php
 $count = test_data($_POST["count"]);
 $price = test_data($_POST["price"]);
 $coef = test_data($_POST["coef"]);
 $gender = $_POST["gender"];
$course="";
if(isset($_POST["course"])){
  $course = " Selected course: ".$_POST["course"];
}

$com = $_POST["com"];
$res=$count*$price*$coef;
$lang="Languages: ";

if(isset($_POST["rus"])){
    $rus = $_POST["rus"];
    $lang=$lang.$rus." ";
}

if(isset($_POST["eng"])){
    $eng = $_POST["eng"];
    $lang=$lang.$eng." ";
}

if(strlen($lang)<13){
$lang="";}


$result="Count=".$count." Price=".$price." Coeff=".$coef." Sum=".$res;
$result=$result."<br>Personal data: <br>Gender:";
$result=$result.$gender."<br>".$lang."<br>".$course."<br>Comments: ".$com;

echo $result;

function test_data($data){
	$data=trim($data);
	$data=stripslashes($data);
	$data=htmlspecialchars($data);
	return $data;
}

?> 