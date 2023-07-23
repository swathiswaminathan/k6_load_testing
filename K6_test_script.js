// File to perform K6 load testing


// Import k6 library 
import http from 'k6/http';
import { check, sleep } from 'k6';


// Simulate given number of users with the given duration
export let options = {
  stages: [
    { duration: '30s', target: 10 }, // Simulate 10 users for 30s
    { duration: '60s', target: 50 }, // Simulate 50 users for 60s
    { duration: '30s', target: 20 }, // Simulate 30 users for 30s
  ],
};

// Specify the API that needs to be tested
export default function() {
  // http.get('https://osrm.meena.fndev.net/');
  http.get('https://osrm.meena.fndev.net/');
  sleep(1);
}