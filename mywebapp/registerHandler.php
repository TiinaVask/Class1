
<?php
echo '<br />Submitted Data<hr />';
    var_dump($_POST);



 // You can retrieve each value and assign to variable in your script

 echo ('<br />');
 $postedData = $_POST['data'];
 $email = $postedData['email'];
 $firstname = $_POST['firstname'];
 $lastname = $_POST['lastname'];
 $address = $_POST['address'];
 $city = $_POST['city'];
 $postcode = $_POST['postcode'];
 $telephone = $_POST['telephone'];
 $submit = $_POST['submit'];

 $data = $_POST['data'];
 $serializedData = serialize($data);

 // write
 $handle = fopen(__DIR__ . '/data.dat', 'w');
 fwrite($handle, $serializedData);
 fclose($handle);

 echo ('<br />');
 // get the file content
 $string = file_get_contents(__DIR__ . '/data.dat');
 $data = unserialize($string); // unserialize it
 $output = '';
 foreach ($data as $key => $value) {
     $field = ucwords($key); // make first letter of each word uppercase
     $output .= "$field: $value" . '<br>';
 }
 echo $output;




 
 