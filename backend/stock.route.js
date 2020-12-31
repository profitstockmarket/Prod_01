module.exports = function(app) {

    const stocks=require('./stock.controller.js');

   //Create new Stock
   app.post('/api/stocks',stocks.create);

   //Get all Stocks

   app.get('/api/stocks',stocks.findAll);

// Delete a Stock with Id
app.delete('/api/stocks/:_id', stocks.delete);

}