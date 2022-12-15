const { request, response } = require("express");
const pool = require("../db/connection");
const modeloListas = require("../models/Listas");


const getPase_de_lista = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloListas.queryGetPase_de_lista, (error) => {throw new Error(error) })
        
        if (!users) {
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getlista_por_ID = async (req = request, res = response) =>{
    
    const {ID_Alumno} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloListas.querygetLista_por_ID, [ID_Alumno], (error) => {throw new Error(error) })
        
        if (!user) {
            res.status(404).json({msg: `No se encontró registro con el ID ${ID_Alumno}`})
            return
        }
        res.json({user})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const addAsistencia = async (req = request, res = response) =>{
    
    const {
        ID_Alumno,
        Fecha,
        Estatus_Asistencia
    } = req.body

    if (
        !Id_Alumno ||
        !Fecha ||
        !Estatus_Asistencia
    ){
        res.status(400).json({msg: "Falta información del pase de lista"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloListas.queryListaExists, [ID_Alumno])

        if (user) {
            res.status(403).json({msg: `El pase de lista ${ID_Alumno} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloListas.queryaddAsistencia, 
        [ ID_Alumno,
            Fecha,
            Estatus_Asistencia
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del pase de lista ${ID_Alumno}`})
            return
        }
 
        res.json({msg: `El pase de lista ${ID_Alumno} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}




module.exports = {getPase_de_lista, getlista_por_ID ,addAsistencia}