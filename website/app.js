/* Global Variables */
const apiKey = '53cf82947a1f90b5b4a94bda52fd24b6';

const performAction = () => {
  const zipCode = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`;

  getData(apiUrl).then((data) => {
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

    postData('/add', {
      temperature: data.main.temp,
      date: newDate,
      userResponse: feelings,
    });

    updateUI();
  });
};

document.getElementById('generate').addEventListener('click', performAction);

const getData = async (url) => {
  const response = await fetch(url);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('Error: ', error);
  }
};

const updateUI = async () => {
  const request = await fetch('/all');

  try {
    const allData = await request.json();

    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temperature;
    document.getElementById('content').innerHTML = allData.userResponse;
  } catch (error) {
    console.log('Error: ', error);
  }
};
