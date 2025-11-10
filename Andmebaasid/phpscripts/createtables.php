<?php
include "conndb.php";

$sql = "CREATE TABLE books(
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
ISBN varchar(13) not null,
title VARCHAR(30) NOT NULL,
publisher VARCHAR(30) NOT NULL,
price decimal(10,2),
year int(4), 
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === FALSE) 
  echo "Error creating table books: " . $conn->error;

$sql2 = "CREATE TABLE authors(
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
email varchar(20) not null,
name VARCHAR(30) NOT NULL,
birthyear int(4) not null,
sex char(1) not null, 
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql2) === FALSE) 
  echo "Error creating table books: " . $conn->error;

$sql3 = "CREATE TABLE booksauthors(
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
bid int(10) not null,
aid int(10) not null
)";

if ($conn->query($sql3) === FALSE) 
  echo "Error creating table books: " . $conn->error;

?>