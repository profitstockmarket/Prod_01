//This is the DB model which is required for Stock portfolio
const Stock= require('./stock.model.js');   

// Create and Save a new Stock
exports.create = (req,res) => {
    //console.log("request", req.body);
    const stock = new Stock(req.body);
    //console.log("stock", stock);
    stock.save()
    .then(data =>{
        res.json(data);
       // console.log("success", data);
    }).catch(err => {
        console.log("error",err);
    })
};

//Fetch all Stocks

exports.findAll = (req,res) => {
    Stock.find()
    .then(stocks => {
        res.json(stocks);
    });
};

// Find a single Stock with an id
exports.findOne = (req, res) => {
  
};

// Update a Stock by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Stock with the specified id in the request
exports.delete = (req, res) => {
    Stock.findByIdAndRemove(req.params._id)
    .then(stock => {
        if(!stock) {
            return res.status(404).json({
                msg: "stock not found with id " + req.params._id
            });
        }
        res.json({msg: "stock deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "stock not found with id " + req.params._id
            });                
        }
        return res.status(500).json({
            msg: "Could not delete stock with id " + req.params._id
        });
    });
};

// Delete all Stocks from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Stocks
exports.findAllPublished = (req, res) => {
  
};