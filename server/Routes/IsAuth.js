const isAuth = (req, res, next) => {
    if (req.user){
         next();
    } else{
        res.json(false)
    }
    
}

module.exports = isAuth