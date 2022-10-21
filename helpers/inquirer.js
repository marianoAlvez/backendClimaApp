const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Search city`
            },
            {
                value: 2,
                name: `${ '2.'.green } Record `
            },
            {
                value: 0,
                name: `${ '0.'.green } Exit`
            },            
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Select an option '.white );
    console.log('==========================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listTasksDelete = async( task = [] ) => {

    const choices = tasks.map( (task, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name:  `${ idx } ${ task.desc }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancel'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'delet',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   

const showListChecklist = async( tasks = [] ) => {

    const choices = tasks.map( (task, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name:  `${ idx } ${ task.desc }`,
            checked: ( task.completeIn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selections',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);
    return ids;
}



module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTasksDelete,
    confirm,
    showListChecklist
}
