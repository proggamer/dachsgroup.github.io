app.get('/citiesN/:city', (req, res) => {
    var cities = JSON.parse(fs.readFileSync("cities2.json"));
    const countryName = req.params.city;
    console.log(countryName);
    let foundCities;
    for (var key in cities) {
        if (cities.hasOwnProperty(key)) {
            if (key == countryName) {
                foundCities = cities[key];
            }
            // console.log(key + " -> " + cities[key]);
        }
    }
    res.send(foundCities);
})