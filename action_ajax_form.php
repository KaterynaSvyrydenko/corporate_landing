<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST['password']) ) { 

    $result = array(
        'name' => $_POST["name"],
        'email' => $_POST["email"],
        'password' => $_POST['password']
    ); 

    echo json_encode($result); 
}
?>