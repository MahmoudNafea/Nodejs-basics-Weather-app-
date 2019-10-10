const request = require('request')

const url = "https://api.darksky.net/forecast/0645abfbc60c4836df698ea01dda9709/37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + " It's " + response.body.currently.temperature + " degrees out. " + " there's " + response.body.currently.precipProbability + " % of rain.")
})