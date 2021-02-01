module.exports = function(app2) {
 
    const customers = require('./customer.controller.js');
 
    // Create a new Customer
    app2.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app2.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app2.get('/api/customers/:customerId', customers.findOne);
 
    // Update a Customer with Id
    app2.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    app2.delete('/api/customers/:customerId', customers.delete);
}