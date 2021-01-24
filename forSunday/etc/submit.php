<?php

$get_data = $_POST['urname'];
$data = mb_strtolower($get_data);

if($data=="foruk"){
    header("Location: ../img/forku.jpg");
}

elseif($data=="batın"){
    header("Location: ../img/batin.png");
}

elseif($data=="yağmur"){
    header("Location: ../img/saz.png");
}

elseif($data=="umut"){
    header("Location: ../img/kangal.jpg");
}





