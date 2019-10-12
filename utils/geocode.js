const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFobW91ZGVsc2F5ZWQiLCJhIjoiY2sxa2pqanlzMDF0MTNtbWZ4eDlkeXQ3NCJ9.NjiGGIlyW13S5Sp_g_c0sA&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Something wrong in the connection', undefined)
        } else if (response.body.features.length === 0) {
            callback('Something wrong in the location', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode