module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation

    const save = (req, res) => {
        const category = {...req.body}

        if(req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, 'Nome não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(category.id) {
            app.db('category')
                .update(category)
                .where({id: category.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('category')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
       
    }

    const get = (req, res) => {
        
    }

    const getById = (req, res) => {
        
    }

   

    return { save, remove, get, getById}
}