const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
]


const inquirerMenu = async () => {
    console.clear()
    console.log('==========================='.green);
    console.log('   Seleccione una opcion'.white);
    console.log('===========================\n'.green);

    const { option } = await inquirer.prompt(questions);
    return option;
}

const pause = async () => {

    const questionToContinue = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`.green,
        }
    ];

    console.log('\n')
    await inquirer.prompt(questionToContinue)
}

const readInput = async ( message ) => {

    const questionInput = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Porfavor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { desc } =  await inquirer.prompt(questionInput);
    return desc;
}
 
const listPlaces = async ( places = [] ) => {

    const choices = places.map( (place, i) => {

        const index = `${i + 1}.`.green;

        return {
            value: place.id,
            name: `${index} ${place.name}`
        }
    })

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    })

    const options = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ];
    const { id } = await inquirer.prompt(options);
    return id;
}





module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
}
 