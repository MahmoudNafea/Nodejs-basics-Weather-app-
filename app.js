const request = require('request')

// const url = "https://api.darksky.net/forecast/0645abfbc60c4836df698ea01dda9709/37.8267,-122.4233"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to the server")
//     } else if (response.body.error) {
//         console.log("Unable to get the location")
//     } else {
//         console.log(response.body.daily.data[0].summary + " It's " + response.body.currently.temperature + " degrees out. " + " there's " + response.body.currently.precipProbability + " % of rain.")

//     }
// })

const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFobW91ZGVsc2F5ZWQiLCJhIjoiY2sxa2pqanlzMDF0MTNtbWZ4eDlkeXQ3NCJ9.NjiGGIlyW13S5Sp_g_c0sA&limit=1"

request({ url: geocodingURL, json: true }, (error, response) => {
    if (error) {
        console.log("Something wrong in the connection")
    } else if (response.body.features.length === 0) {
        console.log("Something wrong in the location")

    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(longitude, latitude)
    }

})