import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const loginUsuario = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Usuário ou senha inválidos." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Usuário ou senha inválidos." });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login realizado com sucesso!",
            token: token
        });

    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor.", error: error.message });
    }
}