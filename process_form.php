<?php
// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:fcs-traffic.database.windows.net,1433; Database = fcs-traffic", "CloudSAe00b27c7", "{your_password_here}");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "CloudSAe00b27c7", "pwd" => "{your_password_here}", "Database" => "fcs-traffic", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:fcs-traffic.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
?>