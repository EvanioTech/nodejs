
let customers = [
    {id: 1, name: 'Matias', Cargo: 'Estagiário'},
    {id: 2, name: 'João', Cargo: 'Assistente Ti'},
    {id: 3, name: 'Maria', Cargo: 'Analista Ti'}
];


class CustomersController {

  
    index(req, res) {
        return res.json(customers);
    }

    show(req, res) {
       const {id} = req.params;
         const customer = customers.find(customer => customer.id == id);
        return res.json(customer);
    }
    create(req, res) {
       const { name, Cargo } = req.body;
       const id = customers[customers.length - 1].id + 1;
       
        const newCustomer = {id, name, Cargo};
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }
    update(req, res) {
       const {id} = req.params;
       const {name, Cargo} = req.body;

         const index = customers.findIndex(item => item.id == id);
         const status = index >= 0 ? 200 : 400;

         if (index >= 0) {
             customers[index] = {id, name, Cargo};
         }

            return res.status(status).json(customers[index]);
    }
    destroy(req, res) {
        const {id} = req.params;
        const index = customers.findIndex(item => item.id == id);
        const status = index >= 0 ? 200 : 400;

        if (index >= 0) {
            customers.splice(index, 1);
        }

        return res.status(status).json();
    }
}

export default new CustomersController();