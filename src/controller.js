import {pool} from './database.js';

class LibroController{

    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add(req,res){
        const libro=req.body;
        const [result] = await pool.query(`INSERT INTO libros(nombre,autor,categoria,anio_publicación,isbn) VALUES (?, ?, ?, ? ,?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicación, libro.isbn]);
        res.json ({"Id insertado": result.insertId});
    }

    async getOne(req,res){
        const libro=req.body;
        const [result] = await pool.query(`SELECT * FROM libros WHERE id=?`, [libro.id]);
        if (result.length>0){
            res.json (result);
        }
        else {
            res.json({"Error": "No existe un libro con el Id especificado"});
        }
    
    }

}
export const libro = new LibroController();