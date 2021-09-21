// exports.helloworld = (req, res) => {
//     res.send("Hello Hello Mohammed!");
// };

exports.readArsenal = (req,res) => {
    res.send({message: "Arsenal are the best!!!"});
};


exports.addArsenal = (req,res) => {
    const name = req.body.name
    res.send({message : `${name} Nice!! we added something!`});
};

exports.updateArsenal = (req,res) => {
    const name = req.body.name
    res.send({message: `${name} Nice!! we updated something!`});
};

exports.deleteArsenal = (req,res) => {
    const name = req.body.name
    res.send({message: `${name} oooo!! we've deleted something!`});
};
