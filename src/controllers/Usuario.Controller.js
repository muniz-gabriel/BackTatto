import Usuario from '../models/Usuario.js'

class UsuarioController {
    async store(req, res) {
        const { nome, email, senha } = req.body
        try {
            const usuario = await Usuario.create({ nome, email, senha })
            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    }

    async index(req, res) {
        try {
            const usuario = await Usuario.findAll()
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar usuário' })
        }
    }
}

export default new UsuarioController()