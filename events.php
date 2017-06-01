<?php

//Store the csv file in an array
$events = array_map('str_getcsv', file('data.csv'));

//Remove the header information from the array 
array_shift($events);

//Convert the dates to a unix timestamp so the datetime plugin can grab it
foreach ($events as &$event) {
	$event[3] = strtotime($event[3]);
	$event[4] = strtotime($event[4]);
}

//Wrap the response array around the events for datatables
$response = [];
$response['data'] = $events;

echo json_encode($response);