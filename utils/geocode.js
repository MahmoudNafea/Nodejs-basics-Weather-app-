const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFobW91ZGVsc2F5ZWQiLCJhIjoiY2sxa2pqanlzMDF0MTNtbWZ4eDlkeXQ3NCJ9.NjiGGIlyW13S5Sp_g_c0sA&limit=1'
    request({ url, json: true }, (error, { body }) => {  //we use destructuring and short hand property of response//
        if (error) {
            callback('Something wrong in the connection', undefined)
        } else if (body.features.length === 0) {
            callback('Something wrong in the location', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode