module.exports = function (app) {

    const stocks = require('./stock.controller.js');
    const profitquerys = require('./profitquery.controller.js');

    //Create new Stock
    app.post('/api/stocks', stocks.create);

    //Get all Stocks

    app.get('/api/stocks', stocks.findAll);

    // Delete a Stock with Id
    app.delete('/api/stocks/:_id', stocks.delete);


    
    // Create a new query
    app.post('/api/profitquerys', profitquerys.create);

    // Retrieve all query
    app.get('/api/profitquerys', profitquerys.findAll);

    //Retrieve a single query by Id
    // app.get('/api/profitquerys/:_id', profitquerys.findOne);

    //Update a query with Id
    app.put('/api/profitquerys', profitquerys.update);

    //Delete a query with Id
    // app.delete('/api/profitquerys/:_id', profitquerys.delete);

}