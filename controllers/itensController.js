const { Item } = require('../models');

const itensController = {
    index: async (_req, res) => {
        const result = await Item.findAll({
            attributes: ['id', 'nome']
        })

        return res.status(200).json(result)
    },
    create: async (req, res) => {
        const dados = req.body
        try {
            const result = await Item.create(dados)

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)            
        }
    },
    delete: async (req, res) => {
        const id = req.params.id

        try {
            await Item.destroy({
                where: {
                    id
                }
            })
            
            return res.status(200).json("Item excluído com sucesso")
        } catch (error) {
            return res.status(400).json(error)            
        }
    }
}

module.exports = itensController;