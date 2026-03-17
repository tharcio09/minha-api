import { User } from "../models/User.js";

export const rotaInicial = (req, res) => {
    res.json({ message: "Bateu na rota inicial" });
}

export const pegarUsuarios = async (req, res) => {

    const usuarios = await User.find();

    res.json(usuarios);
}

export const cadastrarUsuario = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            res.json({ message: "Todas as informações são obrigatórias!" });
            return;
        }

        const newUser = await User.create({
            name: name,
            email: email,
            password: password,

        });

        res.json(newUser);

    } catch (error) {
        console.log('Erro ao adicionar o usuário');
        return;
    }

}

export const deletarUsuario = async (req, res) => {

    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Usuário excluído com sucesso." })
}

export const editarUsuario = async (req, res) => {

    const { name, email, password } = req.body;

    const editedUser = await User.findByIdAndUpdate(req.params.id, {
        name: name,
        email: email,
        password: password
    });

    res.json({ message: "Usuário alterado com sucesso." });
}