const Musician = require("../db/Schemas/Musician");

const register = async (req, res) => {
    try {
        const musician = new Musician(req.body);
        await musician.save()
        return res.status(200).json(musician);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, manager, description, available, imageUrl } = req.body;
        await Musician.findOneAndUpdate({ _id: id }, { name, manager, description, available, imageUrl });
        return res.status(200).json({ name, manager, description, available, imageUrl });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        await Musician.deleteOne({ _id: id });
        return res.status(200).json({ ok: 'Usuario eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const musician = await Musician.findOne({ _id: id });
        return res.status(200).json(musician);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getAll = async (req, res) => {
    try {
        const musicians = await Musician.find();
        return res.status(200).json(musicians);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    register,
    update,
    deleteOne,
    getOne,
    getAll
}

