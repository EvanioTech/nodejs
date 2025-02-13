import './database';

import Customer from './app/models/Customer';


class Playground {
    async start() {
        const customer = await Customer.findAll();

        console.log(JSON.stringify(customer, null, 2));
    }

}


new Playground().start();


// Run the following command in the terminal:
// npx sequelize-cli db:migrate

