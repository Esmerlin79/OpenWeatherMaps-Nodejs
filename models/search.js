const axios = require('axios').default;

class Search {

    searchHistory = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {

    }

    get paramsMapbox() {
        return {
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5
        }
    }


    async findCity( city = '' ) {
        
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURI(city) }.json`,
                params: this.paramsMapbox
            });
            
            const resp = await instance.get();
            console.log(resp.data);

            return [];

        } catch (error) {
            console.log(error.message);
            return [];
        }
    }
}



module.exports = Search;