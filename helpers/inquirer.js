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


// 
const listadoTareasBorrar = async ( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const index = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${index} ${tarea.desc}`
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
            message: 'Borrar',
            choices
        }
    ];
    const { id } = await inquirer.prompt(options);
    return id;
}

const mostrarListadoCheckList = async ( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const index = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${index} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false,
        }
    })

    const option = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(option);
    return ids;
}


const confirm = async ( message ) => {
    const questionConfirm = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ]
    const { ok } = await inquirer.prompt(questionConfirm);
    return ok;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listadoTareasBorrar,
    confirm,
    mostrarListadoCheckList,
}
 