<?php
// Initialize variables to store user input
$name = $email = $age = $country = "";
$errors = [];

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize name
    if (empty($_POST["name"])) {
        $errors[] = "Name is required";
    } else {
        $name = sanitize_input($_POST["name"]);
        // Check if name contains only letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $errors[] = "Only letters and white space allowed for name";
        }
    }
    
    // Validate and sanitize email
    if (empty($_POST["email"])) {
        $errors[] = "Email is required";
    } else {
        $email = sanitize_input($_POST["email"]);
        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email format";
        }
    }
    
    // Validate and sanitize age
    if (empty($_POST["age"])) {
        $errors[] = "Age is required";
    } else {
        $age = intval($_POST["age"]);
        // Check if age is a positive integer
        if ($age <= 0) {
            $errors[] = "Age must be a positive integer";
        }
    }
    
    // Validate and sanitize country
    if (empty($_POST["country"])) {
        $errors[] = "Country is required";
    } else {
        $country = sanitize_input($_POST["country"]);
    }
    
    // If there are no errors, process the data
    if (empty($errors)) {
        // Perform necessary operations with the validated and sanitized data
        // For example, you could insert the data into a database
        // $db = new PDO("connection_string");
        // $stmt = $db->prepare("INSERT INTO users (name, email, age, country) VALUES (?, ?, ?, ?)");
        // $stmt->execute([$name, $email, $age, $country]);
        
        // Display a success message to the user
        echo "Thank you for submitting your information!";
    } else {
        // Display error messages to the user
        echo "Errors occurred:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    // Handle cases where the script is accessed directly without a form submission
    echo "This script should be accessed through the form.";
}
?>