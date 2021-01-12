module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const article = {...req.body}
        if(req.params.id) article.id = req.params.id
        
        
        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.content, 'Conteúdo não informado')
            existsOrError(article.id_user, 'Autor não informado')
        } catch(msg) {
            res.status(400).send(msg)
        }
        
        if(article.id) {
            app.db('article')
            .update(article)
            .where({id: article.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        } else {
            article.created_at = new Date()
            app.db('article')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const deletedRows = await app.db('article')
                .where({id: req.params.id}).del()
            
            try {
                existsOrError(deletedRows, 'Artigo não encontrado')
            } catch(msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('article').count('id').first()
        const count = parseInt(result.count)


        await app.db.select('article.id', 'article.name', 'article.created_at', 'article.img', {author: 'user.name'})
            .from('article')
            .innerJoin('user', 'article.id_user', 'user.id')
            .limit(limit).offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('article')
            .where({id: req.params.id})
            .first()
            .then(article => res.json(article))
            .catch(err => res.status(500).send(err))
    }


    return {save, remove, get, getById}
}