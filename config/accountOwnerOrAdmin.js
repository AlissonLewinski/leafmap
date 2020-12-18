module.exports = middleware => {
    return (req, res, next) => {
        if(parseInt(req.params.id) === req.user.id || req.user.admin) {
            middleware(req, res, next)
        } else {
            res.status(402).send('Usuário não é administrador')
        }
    }
}