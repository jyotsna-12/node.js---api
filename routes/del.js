const route = require('express').Router()
const {Order} = require('../db/models')


route.delete('/del/?email',(req,res)=>{    
     Order.destroy({
            where: {
                email: req.params.email
            }
        })
        .then(function (deletedRecord) {
            if(deletedRecord === 1){
                res.status(200).json({message:"Deleted successfully"});          
            }
            else
            {
                res.status(404).json({message:"record not found"})
            }
        })
        .catch(function (error){
            res.status(500).json(error);
        })
    })
        module.exports=route
