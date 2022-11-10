const Pelicula = require('../Models/Peliculas');


//Lista completa 
const ListaPeliculas = async (req, res) => {
    try {
        const Lista = await Pelicula.find({}).sort({Año_estreno: 1}).lean();
        res.render('Peliculas', { Lista });
    } catch (error) {
        res.json({ message: err });
    }
}

//Nueva Pelicula
const CrearPelicula = async (req, res) => {
    let NuevaPelicula = Pelicula(req.body);
    try {
        NuevaPelicula  = await NuevaPelicula.save();
        res.redirect('/Peliculas');
    } catch (error) {
        res.json(error)
    }
};


//Editar
const Encontrar = async (req, res) => {

    let Edit = await Pelicula.findById(req.params.id).lean()
    res.render('EditarPeliculas', { Edit })
}

const Editar = async (req, res) => {

    await Pelicula.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/Peliculas')
}



//Eliminar
const Eliminar = async (req, res) => {
    try {
        let id = req.params.id
        await Pelicula.findByIdAndDelete(id);
        res.redirect('/Peliculas');
    } catch (error) {
        res.json({ message: err })
    }
}


//Busquedas especificas

const Lucas = async (req, res) => {
    try {
        const Lista = await Pelicula.find({ Director: 'George Lucas' }).lean();
        res.render('Lucas', { Lista });
    } catch (error) {
        res.json({ message: err });
    }
}

const Original = async (req, res) => {
    try {
        const Lista = await Pelicula.find({ Grupo: 'Trilogia Original' }).lean();
        res.render('Original', { Lista });
    } catch (error) {
        res.json({ message: err });
    }
}

const Secuelas = async (req, res) => {
    try {
        const Lista = await Pelicula.find({ Grupo: 'Secuelas' }).lean();
        res.render('Secuelas', { Lista });
    } catch (error) {
        res.json({ message: err });
    }
}

const Precuelas = async (req, res) => {
    try {
        const Lista = await Pelicula.find({ Grupo: 'Precuelas' }).lean();
        res.render('Precuelas', { Lista });
    } catch (error) {
        res.json({ message: err });
    }
}

module.exports = { ListaPeliculas, CrearPelicula, Eliminar, Encontrar, Editar, Lucas, Original, Secuelas, Precuelas }