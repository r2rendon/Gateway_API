const api = process.env.FLIGHTS_API_URL;
const axios = require('axios').default;
const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

exports.getFlights = async (req, res) => {
    try {
        const flights = await axios.get(`${api}/Vuelos`, { httpsAgent: httpsAgent});
        
        return res.status(200).json({ status: 200, data: flights.data});

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message})
    }
};

exports.getFlightsByOrigin = async (req, res) => {
    try {
        const origin = req.query.origin;
        const flights = await axios.get(`${api}/Vuelos/getByOrigin?origin=${origin}`, { httpsAgent: httpsAgent});
        
        return res.status(200).json({ status: 200, data: flights.data});

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message})
    }
};

exports.getFlightsByRange = async (req, res) => {
    try {
        const minimumRange = req.params.minimumRange;
        const maximumRange = req.params.maximumRange;
        console.log(`${api}/Vuelos/getByRange/${minimumRange}/${maximumRange}`);
        const flights = await axios.get(`${api}/Vuelos/getByRange/${minimumRange}/${maximumRange}`, { httpsAgent: httpsAgent});
        
        return res.status(200).json({ status: 200, data: flights.data});

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message})
    }
};