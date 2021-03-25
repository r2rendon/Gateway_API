const api = process.env.DESTINATIONS_API_URL;
const axios = require('axios').default;

exports.getDestinations = async (req, res) => {
    try {
        const destinations = await axios.get(`${api}/Destinations`);

        return res.status(200).json({ status: 200, data: destinations.data });

    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getExperiences = async (req, res) => {
    try{
        const experiences = await axios.get(`${api}/Destinations/experience`);

        return res.status(200).json({ status: 200, data: experiences.data });

    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
};

exports.getDestinationSearchResults = async (req, res) => {
    try {
        const search = await axios({
            method: 'get',
            url: `${api}/Destinations/search`,
            data: {
                place: req.body.place,
                date: req.body.date,
                date2: req.body.date2,
                price: req.body.price,
                internet: req.body.internet
            }
        });

        console.log(search.data);
        
        return res.status(200).json({ status: 200, data: search.data });

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message})
    }
};