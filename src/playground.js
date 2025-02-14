import './database';

import Customer from './app/models/Customer';


class Playground {
    static async run() {
       const customer = await Customer.findAll();
            


        console.log(JSON.stringify(customer, null, 2));

    }
}

Playground.run();
       