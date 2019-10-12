const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/0645abfbc60c4836df698ea01dda9709/" + longitude + ',' + latitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to the server", undefined)
        } else if (response.body.error) {
            callback("Unable to get the location", undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + " It's " + response.body.currently.temperature + " degrees out. " + " there's " + response.body.currently.precipProbability + " % of rain.")
        }
    })
}

module.exports = forecast