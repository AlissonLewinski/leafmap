module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = (req, res) => {
        const plant = { ...req.body }
        if(req.params.id) plant.id = req.params.id

        try {
            existsOrError(plant.name, 'Nome não informado')
            existsOrError(plant.scientific_name, 'Nome científico não informado')
            existsOrError(plant.content, 'Conteúdo não informado')
            existsOrError(plant.id_category, 'Categoria não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(plant.id) {
            app.db('plant')
                .update(plant)
                .where({id: plant.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('plant')
                .insert(plant)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const deletedRows = await app.db('plant')
                .where({id: req.params.id}).del()

            try {
                existsOrError(deletedRows, 'Planta não foi encontrada')
            } catch(msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch(msg) {
            return res.status(500).send(msg)
        }
    }

    const limit = 10
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('plant').count('id').first()
        const count = parseInt(result.count)

        app.db('plant')
            .select('id', 'name', 'img')
            .limit(limit).offset(page * limit - limit)
            .then(plants => res.json({ data: plants, count, limit }))
            .catch(err => res.status(500).send(err))
    }
}