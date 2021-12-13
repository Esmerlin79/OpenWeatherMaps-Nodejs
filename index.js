require('dotenv').config();
const { inquirerMenu, pause, readInput, listPlaces } = require("./helpers/inquirer");
const Search = require("./models/search");


const main = async () => {

    const search = new Search(); 
    let opt;

    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                const city = await readInput('Ciudad: ');

                const places = await search.findCity(city);
                const id = await listPlaces(places);

                if( id === '0') continue;

                const { name, lng, lat } = places.find( place => place.id === id );
                const { desc, temp, min, max } = await search.weatherPlace( lat, lng );

                search.addHistory( name );

                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', name.green);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:', temp);
                console.log('Minima:', min);
                console.log('Maxima:', max);
                console.log('Clima:', desc.green);
                break;

            case 2:
                search.historyCapitalized.map( (place, i) => {
                    const idx = `${ i + 1 }.`.green;
                    console.log(`${idx} ${place}`);
                })
                break;
        }

        if( opt !== 0 ) await pause();

    } while( opt !== 0 );
}


main();