module.exports={
    getAll : (req,res)=>{
        return res.status(200).json({msg:`all products`});
    },
    getByID : (req,res)=>{
        return res.status(200).json({msg:`product ${req.params.id} `});
    },
    addNew : (req,res)=>{
        console.log(req.body);
        return res.status(200).json({msg:`new product added`});
    },
    updateByID : (req,res)=>{
        return res.status(200).json({msg:`product ${req.params.id} updated`});
    },
    deleteByID : (req,res)=>{
        return res.status(200).json({msg:`product ${req.params.id} deleted`});
    },

};