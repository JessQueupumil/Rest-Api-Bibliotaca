import {pool} from './database.js';
import {controlAdd } from './controldeerrores.js';
import {controlGetOne} from "./controldeerrores.js";
import {controlUpdate} from "./controldeerrores.js";
import {controlDelete} from "./controldeerrores.js";

class LibroController {

    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    //try -catch //
    async add (req, res){
        try {
        const libro = req.body;
        controlAdd(libro);
        const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, anio_publicacion, isbn)
            VALUES (?, ?, ?, ? ,?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);
            res.status(201).json ({"ID insertado": result.insertId});
        } catch (e) {
        res.status(404).json({"error":e});
        }
    }

    //try - catch//
    async getOne (req, res){
        try {
        const libro = {"id": parseInt(req.params.id)};
        controlGetOne(libro);
        const id_libro = parseInt(libro.id);
        const [result] = await pool.query(`SELECT * FROM libros WHERE id=?`, [id_libro]);
        if (result.length > 0){ res.json (result);
        }
        else {
            throw (`No existe un libro con el id: ${id_libro}.`);
        }
        } catch(e) {
        if(e.errno===1054) {
            res.json({"Error": "Usted ha ingresado un valor distinto a un número de ID."});
        }
    }
}

//try -catch//
    async update (req, res) {
    try {
      //console.log(req.body);
    const libro = req.body;
    controlUpdate(libro);
    const id_libro = parseInt(libro.id);
    const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?), isbn=(?) WHERE id=(?)`,
    [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn, id_libro]);
    if(result.affectedRows>0){
                res.json("¡ El libro ha sido actualizado!");
            }else{
                throw "No se puedo actualizar el libro especificado. Controle que el id sea válido";
            }
    } catch(e) {
    res.status(404).json({"error": e});
    }
}

//try -catch//
async delete(req, res) {
    try {
    const libro = req.body;
    controlDelete(libro);
    const isbn = libro.isbn;
    const [result] = await pool.query(`DELETE FROM libros where isbn=(?)`, isbn);
    if (result.affectedRows>0) {
        res.json(`El libro ha sido eliminado.`);
    } else {
        res.json(`No se pudo eliminar el libro. Controle el isbn ingresado.`);
    }
    } catch(e) {
      //console.log(e);
    res.status(404).json({"error": e});
    }
}
}

export const libro = new LibroController();