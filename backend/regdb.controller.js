const Reg = require('./regdb.model.js');
 
 
// POST a Customer
exports.create = (req, res) => {
    // Create a Customer
    const reg = new Reg(req.body);
 
    // Save a Customer in the MongoDB
    reg.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};
 
 
//FETCH all Regs;
exports.findAll = (req, res) => {
    Reg.find()
    .then(regs => {
        res.json(regs);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};
 
 
