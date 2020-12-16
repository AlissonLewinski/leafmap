const admin = require('./admin')

module.exports = app => {
    app.route('/plantas/c/:category')
        .get(app.api.plant.getByCategory)
    
    app.route('/plantas/:name')
        .get(app.api.plant.getByName)
    
    app.route('/plantas')
        .get(app.api.plant.get)

}