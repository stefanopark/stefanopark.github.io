// As a User
// When I visit the site
// I expect to see the names of all the stations
$("#container").load("http://api.citybik.es/citi-bike-nyc.json");

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

$.ajax({
    type: 'GET',
    url: 'http://api.citybik.es/citi-bike-nyc.json',
    success: function(stations) {
        var stationsFree = stations.filter(function(stations) {
            return stations.free > 0;
        });

        stationsFree.splice(0, 50).forEach(function(stations) {
            var stationName = stations.name;
            $(".free-stations").append("<li>" + stationName + "</li>")
        });

        var stations = stations.splice(0, 50);

        stations.forEach(function(stations) {
            var stationName = stations.name;
            $(".top-stations").append("<li>" + stationName + "</li>")
        });

    },
});