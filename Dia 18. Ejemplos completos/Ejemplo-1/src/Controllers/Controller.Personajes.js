const Personaje = require('../Models/Personajes');


//Todos los personajes
const ListaPersonajes = async (req, res) => {
    try {
        const Lista = await Personaje.find().lean()
        res.render('Personajes', { Lista })
    } catch (error) {
        res.json({ message: error })
    }
};

//Nuevo Personaje
const CrearPersonaje = async (req, res) => {
    let NuevoPersonaje = Personaje(req.body);
    try {
        NuevoPersonaje = await NuevoPersonaje.save();
        res.redirect('/Personajes');
    } catch (error) {
        res.json(error)
    }
};


//Editar
const Encontrar = async (req, res) => {

    let Edit = await Personaje.findById(req.params.id).lean()
    res.render('EditarPersonajes', { Edit })
}

const Editar = async (req, res) => {

    await Personaje.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/Personajes')
}


//Eliminar
const Borrar = async (req, res) => {
    try {
        let id = req.params.id
        await Personaje.findByIdAndDelete(id);
        res.redirect('/Personajes');
    } catch (error) {
        res.json({ message: err })
    }
};

//Busquedas especificas
const Humanos = async (req, res) => {
    try {
        const Humanos = await Personaje.find({Especie: 'Humano'}).lean()
        res.render('Humanos', { Lista: Humanos })
    } catch (error) {
        res.json({ message: error })
    }
};

const Sith = async (req, res) => {
    try {
        const Sith = await Personaje.find({Afiliacion: 'Orden Sith'}).lean()
        res.render('Sith', { Lista: Sith })
    } catch (error) {
        res.json({ message: error })
    }
};

const Tatooine = async (req, res) => {
    try {
        const Tatooine = await Personaje.find({Planeta_Natal: 'Tatooine'}).lean()
        res.render('Tatooine', { Lista: Tatooine })
    } catch (error) {
        res.json({ message: error })
    }
};


module.exports = { ListaPersonajes, CrearPersonaje, Encontrar, Editar, Borrar, Humanos, Sith, Tatooine };