const api = process.env.DESTINATIONS_API_URL;
const axios = require('axios').default;

exports.getDestinations = async (req, res) => {
    try {
        console.log(api);
        const destinations = await axios.get(`${api}/Destinations`);

        return res.status(200).json({ status: 200, data: destinations.data });

    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

