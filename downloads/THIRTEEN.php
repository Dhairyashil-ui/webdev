<!DOCTYPE html>
<html>
<head>
  <title>Project Competition Registration</title>
</head>
<body>

<h2>Project Competition Registration Form</h2>

<form method="POST">
  Name: <input type="text" name="name"><br><br>
  Email: <input type="email" name="email"><br><br>
  Project Title: <input type="text" name="project"><br><br>
  College: <input type="text" name="college"><br><br>

  <input type="submit" value="Register">
</form>

<hr>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $project = $_POST['project'];
  $college = $_POST['college'];

  echo "<h3>Submitted Details:</h3>";
  echo "Name: $name <br>";
  echo "Email: $email <br>";
  echo "Project Title: $project <br>";
  echo "College: $college <br>";
}
?>

</body>
</html>