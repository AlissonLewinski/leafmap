const admin = require('./admin')
const editor = require('./editor')

module.exports = app => {
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    //Plantas
    app.route('/plantas/c/:category')
        .get(app.api.plant.getByCategory)
    
    app.route('/plantas/n/:name')
        .get(app.api.plant.getByName)
    
    app.route('/plantas/:id')
        .all(app.config.passport.authenticate())
        .get(editor(app.api.plant.getById))
        .put(editor(app.api.plant.save))
        .delete(editor(app.api.plant.remove))

    app.route('/plantas')
        .get(app.api.plant.get)
        .post(app.config.passport.authenticate())
        .post(editor(app.api.plant.save))
}