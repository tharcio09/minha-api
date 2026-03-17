import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

export async function mongo() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conectado ao BD!');
    } catch (error) {
        console.log('Erro ao conectar-se ao BD')
        return;
    }
};

