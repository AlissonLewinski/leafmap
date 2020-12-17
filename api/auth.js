const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha')
        }

        const user = await app.db('user')
            .where({email: req.body.email})
            .whereNull('deleted_at')
            .first()

        if(!user) {
            return res.status(400).send('Usuário não encontrado')
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) {
            return res.status(401).send('Email ou senha inválidos')
        }

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            editor: user.editor,
            admin: user.admin,
            created_at: user.created_at,
            iat: now,
            exp: now + (60 * 60 * 24 * 7)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            console.log(e)
        }

        res.send(false)
    }

    return { signin, validateToken }
}