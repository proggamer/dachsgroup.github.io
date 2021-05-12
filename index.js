var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {

    //var cities = JSON.parse(fs.readFileSync("cities.json"));
    res.send('Check');
});

app.get('/cities', (req, res) => {

    var cities = JSON.parse(fs.readFileSync("cities.json"));
    res.send(cities);
});

app.get('/cities/:city', (req, res) => {

    var cities = JSON.parse(fs.readFileSync("cities.json"));
    const country = req.params.city;
    console.log(country);
    var foundCity = cities.filter((city) => city.country === country);
    console.log(foundCity);
    //res.send(foundCity);

    var finalCities = [];
    for(i=0; i<foundCity.length; i++){
        finalCities.push(foundCity[i].name);
    }
    console.log(finalCities);
    res.send(finalCities);
});

app.get('/countries', (req, res) => {

    var countries = JSON.parse(fs.readFileSync("countries.json"));
    var countries_name = [];
    for(i=0;i<countries.length;i++)
    {
        countries_name.push(countries[i].Name);
    }
    res.send(countries_name);
});

app.get('/countries/:country', (req, res) => {

    var countries = JSON.parse(fs.readFileSync("countries.json"));
    const country = req.params.country;
    var foundCountry = countries.find((country1) => country1.Name === country);
    console.log(foundCountry.Code);
    res.send(foundCountry.Code);
});

app.listen(PORT, () => console.log('Server running at 5000 port'));

