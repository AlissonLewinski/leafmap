module.exports = app => {
    const {existsOrError} = app.api.validation

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

    const getById = (req, res) => {
        app.db('plant')
            .where({ id: req.params.id })
            .first()
            .then(plant => res.json(plant))
            .catch(err => res.status(500).send(err))
    }

    const getByName = (req, res) => {
        const name = req.params.name

        app.db.raw(`SELECT plant.id, plant.name, plant.scientific_name, plant.content, plant.id_category FROM plant WHERE lower(unaccent(plant.name)) = lower(unaccent('${name}'))`)
            .then(plant => {
                res.json(plant.rows[0])
            })
            .catch(err => res.status(500).send(err))
    }

    const getByCategory = async (req, res) => {
        const page = req.query.page || 1
        const category = req.params.category

        const result = await app.db.raw(`SELECT COUNT(plant.id) FROM plant
            INNER JOIN category ON plant.id_category = category.id
            WHERE lower(unaccent(category.name)) = lower(unaccent('${category}'));`)

        const count = parseInt(result.rows[0].count)
        if(count < 1) {
            res.status(400).send('Categoria não encontrada')
        }

        app.db.raw(`SELECT plant.name, plant.img FROM plant
            INNER JOIN category ON plant.id_category = category.id
            WHERE lower(unaccent(category.name)) = lower(unaccent('${category}'))
            LIMIT ${limit} OFFSET ${page * limit - limit};`)

            .then(plants => res.json({ data: plants.rows, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    return {save, remove, get, getById, getByName, getByCategory}
}