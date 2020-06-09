const { Troca, ItemTroca } = require('../models')

const doacoesController = {
    index: async (req, res) => {
        const result = await Troca.findAll({
            include: [{
                association: 'solicitante',
                attributes: ['id', 'nome']
            },
            {
                association: 'itens',
                attributes: ['id', 'nome']
            }]
        })

        const response = result.dataValues.map(doacao => {
            return {
                id: doacao.id,
                descricao: doacao.descricao,
                itens: doacao.itens,
                solicitante: doacao.solicitante
            }
        })

        return res.status(200).json(response)
    },
    create: async (req, res) => {
        const dados = req.body
        
        const doacao = await Troca.create({
            descricao: dados.descricao,
            idReceptor: dados.id
        })

        dados.itens.forEach(async item => {
            await ItemTroca.create({
                idTroca: doacao.dataValues.id,
                idItem: item
            })
        })

        return res.status(200).json("Criação de doação realizada com sucesso")
    },
    close: (req, res) => {
        
    }
}

module.exports = doacoesController;