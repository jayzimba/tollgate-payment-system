<?php
require_once("connection.php");

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$vehicleModel = $_POST['vehicleModel'];
$regNumber = $_POST['regNumber'];
$password = ($_POST['password']);


$sql = "SELECT * FROM customer where email  = $email OR contact = $contact";
$query_result = mysqli_query($conn, $sql);




if (!mysqli_num_rows($query_result)) {
    $query_reg = "INSERT INTO `customer`(`fullname`, `email`, `phone`, `password`, `account_balance`) VALUES ($fullname, $email, $contact, $password)";
    $query_result_reg = mysqli_query($conn, $query_reg);

    if ($query_result_reg) {
        $selectAll = "SELECT id FROM customer ORDER BY id DESC LIMIT 1";
        $query_result1 = mysqli_query($conn, $selectAll);
        if ($query_result1) {
            $row = mysqli_fetch_assoc($query_result1);

            // Check if a row was returned
            if ($row) {
                // Get the ID from the first query result
                $customerId = $row['id'];

                // Second query to insert into the vehicles table using the fetched ID
                $queryFinal = "INSERT INTO vehicles (model, plate_number, owner) VALUES ('$vehicleModel', '$regNumber', $customerId)";
                // Execute the second query
                $execute = mysqli_query($conn, $queryFinal);
                if ($execute) {
                    $Message = "Registered successfuly!";
                }
            }
        }
    }
} else {
    $Message = "User Already Registered";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
