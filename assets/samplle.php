<?php
  require_once("connection.php");
// SQL query to fetch the data
$customerVehicle = $_POST['customerVehicle'];


$sql = "SELECT
    t.name AS tollgate_name,
    i.id AS invoice_id,
    vt.name AS vehicle_type_name,
    vt.amount AS amount,
    i.datetime_created AS date_created
    FROM
        invoice AS i
    JOIN
        vehicle AS v ON i.vehicle = v.id
    JOIN
        vehicles_type AS vt ON v.type = vt.id
    JOIN
        tollgate AS t ON i.tollGate = t.id
    WHERE
        v.id = '$customerVehicle';
    ";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Encode the data as JSON and return it
    echo json_encode($data);
} else {
    echo "No data found";
}

$db->close();
?>
