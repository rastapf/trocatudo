const { Usuario, sequelize } = require('../models');

const usuarioController = {
    index: (req, res) => {

    },
    create: async (req, res) => {
        const dados = req.body

        try {
            const result = await sequelize.transaction(async (t) => {
                const usuarioCadastrado = await Usuario.findOrCreate({
                    where: {
                        email: dados.email
                    },
                    defaults: dados,
                    transaction: t
                })

                if(!usuarioCadastrado[1]) {
                    throw new Error("Usuário já existe no sistema")
                }

                return usuarioCadastrado
            })

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)            
        }        
    },

    auth: async (req, res) => {
        const {email} = req.body

        try {
            const result = await Usuario.findOne({
                where: {
                    email
                }
            })
            
            if(result !== null) {
                const response = {id: result.dataValues.id, nome: result.dataValues.nome}
                return res.status(200).json(response)
            } else {
                throw new Error("Usuário não está cadastrado no sistema")
            }
        } catch (error) {
            return res.status(403).json(error.message)
        }
    }
}

module.exports = usuarioController;