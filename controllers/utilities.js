module.exports = class Utilities {
    isLoggedIn(req, res, next)
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        res.redirect('/login')
    }

    isAdmin(req, res, next)
    {
        if(req.isAuthenticated())
        {
            if(req.user.userType == 0 || req.user.userType == 3) {next();}
            else {res.redirect('/');}
        }else{
            res.redirect('/login')
        }
    }
}