<?php
function updateSQL($sql){
	$conn = mysqli_connect("localhost", "root", "","exchange_portal");
	$result = mysqli_query($conn, $sql)or die(mysqli_error($conn));
	return $result;
}
function getDataFromDB($sql){
	$conn = mysqli_connect("localhost", "root", "","exchange_portal");

	$result = mysqli_query($conn, $sql)or die(mysqli_error($conn));
	$arr=array();

	while($row = mysqli_fetch_assoc($result)) {
		$arr[]=$row;
	}
	return $arr;
}
function getJSONFromDB($sql){
	$conn = mysqli_connect("localhost", "root", "","exchange_portal");
	$result = mysqli_query($conn, $sql)or die(mysqli_error($conn));
	$arr=array();
	while($row = mysqli_fetch_assoc($result)) {
		$arr[]=$row;
	}
	return json_encode($arr);
}
?>