import './database';

import Customer from './app/models/Customer';
import { Op } from 'sequelize';


class Playground {
    static async run() {
        // comando para buscar id especifico
       // const customer = await Customer.findByPk(1);
       const customer = await Customer.findAll({
            where: {
                status: {
                    [Op.ne]: "inactive"
                }
                
                
            }, 
            
       });
            


        console.log(JSON.stringify(customer, null, 2));

    }
}

Playground.run();
       