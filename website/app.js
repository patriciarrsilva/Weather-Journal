/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/';
const apiKey = '53cf82947a1f90b5b4a94bda52fd24b6';

document.getElementById('generate').addEventListener('click', performAction);

const performAction = () => {
    const zipCode;

    getData();
};

const getData = async baseURL => {
  const response = await fetch(url);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
