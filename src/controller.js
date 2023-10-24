import {pool} from './database.js';
import { controlAdd } from './controldeerrores.js';
import {controlGetOne} from "./controldeerrores.js";

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
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, anio_publicacion, isbn)
            VALUES (?, ?, ?, ? ,?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);
            res.status(201).json ({"ID insertado": result.insertId});
        } catch (e) {
        res.status(404).json({"error":e});
        }
    }

    async getOne (req, res){
        try {
        const libro = {"id": parseInt(req.params.id)};
        controlGetOne(libro);
        const id_libro = parseInt(libro.id);
        const [result] = await pool.query(`SELECT * FROM Libros WHERE id=?`, [id_libro]);
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

    async update(req,res){
        const libro=req.body;
        const id_libro=parseInt(libro.id);
        const [result]= await pool.query (`UPDATE libros SET nombre=(?), autor=(?),categoria=(?),anio_publicacion=(?),isbn=(?), WHERE id=(?)`,
        [libro.nombre, libro.autor, libro.categoria, libro.anio_publicación,libro.isbn, id_libro]);
        res.json({"Libro acctualizado":result.changedRows});
    }
}

export const libro = new LibroController();