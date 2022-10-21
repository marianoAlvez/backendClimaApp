const Searches = require("./models/searches");
const {inquirerMenu, readInput } = require("./helpers/inquirer");


const main = async () => {
    const searches = new Searches();
    let option;

    do{
        option = await inquirerMenu();
        switch(option) {
            case 1:
                const place = await readInput('City: ');
                console.log(place);
                console.log('\nCity information\n'.green);
                console.log('City');
                console.log('Latitude');
                console.log('Longitude');
                console.log('Temperature');
                console.log('Maximum');
                console.log('Minimum');
            case 2:
                
            break;

        }
    
    } while( option !== 0 );

}

main();