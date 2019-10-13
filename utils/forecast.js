const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/0645abfbc60c4836df698ea01dda9709/" + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {//we use destructuring and short hand property of response//
        if (error) {
            callback("Unable to connect to the server", undefined)
        } else if (body.error) {
            callback("Unable to get the location", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It's " + body.currently.temperature + " degrees out. " + " there's " + body.currently.precipProbability + " % of rain.")
        }
    })
}

module.exports = forecast