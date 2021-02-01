const Profitquery = require('./profitquery.model.js');
 
 
// POST a query
exports.create = (req, res) => {
    // Create a query
    const profitquery = new Profitquery(req.body);
 
    // Save a query in the MongoDB0
    profitquery.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};
 
 
// FETCH all Customers
exports.findAll = (req, res) => {
    Profitquery.find()
    .then(profitquery => {
        res.json(profitquery);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};
 
 
// // FIND a Customer
// exports.findOne = (req, res) => {
//     Profitquery.findById(req.params.customerId)
//     .then(customer => {
//         if(!customer) {
//             return res.status(404).json({
//                 msg: "Customer not found with id " + req.params.customerId
//             });            
//         }
//         res.json(customer);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).json({
//                 msg: "Customer not found with id " + req.params.customerId
//             });                
//         }
//         return res.status(500).json({
//             msg: "Error retrieving Customer with id " + req.params.customerId
//         });
//     });
// };
 
// UPDATE a Customer
exports.update = (req, res) => {
    // Find customer and update it
    Profitquery.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(profitquery => {
        if(!profitquery) {
            return res.status(404).json({
                msg: "Customer not found with id " + req.params._id
            });
        }
        res.json(profitquery);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Query not found with id " + req.params._id
            });                 
        }
        return res.status(500).json({
            msg: "Error updating Query with id " + req.params._id
        });
    });
};
 
// // DELETE a Customer
// exports.delete = (req, res) => {
//     Customer.findByIdAndRemove(req.params.customerId)
//     .then(customer => {
//         if(!customer) {
//             return res.status(404).json({
//                 msg: "Customer not found with id " + req.params.customerId
//             });
//         }
//         res.json({msg: "Customer deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).json({
//                 msg: "Customer not found with id " + req.params.customerId
//             });                
//         }
//         return res.status(500).json({
//             msg: "Could not delete customer with id " + req.params.customerId
//         });
//     });
// };