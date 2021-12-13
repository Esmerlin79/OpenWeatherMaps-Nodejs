require('dotenv').config();
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Search = require("./models/search");


const main = async () => {

    const search = new Search(); 
    let opt;

    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                const place = await readInput('Ciudad: ');
                search.findCity(place);

                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );
                break;
        }

        if( opt !== 0 ) await pause();

    } while( opt !== 0 );
}


main();