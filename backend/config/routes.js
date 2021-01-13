const admin = require('./admin')
const editor = require('./editor')
const accountOwnerOrAdmin = require('./accountOwnerOrAdmin')

module.exports = app => {
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    //Plantas
    app.route('/plants/c/:category')
        .get(app.api.plant.getByCategory)
    
    app.route('/plants/n/:name')
        .get(app.api.plant.getByName)
    
    app.route('/plants/:id')
        .all(app.config.passport.authenticate())
        .get(editor(app.api.plant.getById))
        .put(editor(app.api.plant.save))
        .delete(editor(app.api.plant.remove))

    app.route('/plants')
        .get(app.api.plant.get)
        .post(app.config.passport.authenticate())
        .post(editor(app.api.plant.save))

    //Categorias
    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(editor(app.api.category.getById))
        .put(editor(app.api.category.save))
        .delete(editor(app.api.category.remove))

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.config.passport.authenticate())
        .post(editor(app.api.category.save))

    //Usuários
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .get(accountOwnerOrAdmin(app.api.user.getById))
        .put(admin(app.api.user.save))
        .delete(admin(app.api.user.remove))

    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.user.get))
        .post(admin(app.api.user.save))

    //Artigos
    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(editor(app.api.article.getById))
        .put(editor(app.api.article.save))
        .delete(editor(app.api.article.remove))

    app.route('/articles')
        .get(app.api.article.get)
        .post(app.config.passport.authenticate())
        .post(editor(app.api.article.save))
}