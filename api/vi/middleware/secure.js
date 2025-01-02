module.exports=(req,res,next)=>{
    let arrIps = [''];
    for(let i = 0; i < arrIps.length; i++)
    {
        if(req.ip == arrIps[i])
        {
            return next();
        }
    }
    return res.status(401).json({msg:'not authorized'});

}