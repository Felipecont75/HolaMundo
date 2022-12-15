const { request, response } = require("express");
const pool = require("../db/connection");
const modeloAlumno = require("../models/Alumnos");

const getStudent = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloAlumno.queryGetStudent, (error) => {throw new Error(error) })
        
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

const getStudentByID = async (req = request, res = response) =>{
    
    const {ID_Alumno} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloAlumno.querygetStudentByID, [ID_Alumno], (error) => {throw new Error(error) })
        
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


const addStudent = async (req = request, res = response) =>{
    
    const {
        ID_Alumno,
        ID_Grupo,
        Nombre_A,
        Apellidos_A,
        Materia
    } = req.body

    if (
        !ID_Alumno ||
        !ID_Grupo ||
        !Nombre_A ||
        !Apellidos_A ||
        !Materia
    ){
        res.status(400).json({msg: "Falta información del Alumno"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloAlumno.queryStudentExist, [Nombre_A])

        if (user) {
            res.status(403).json({msg: `El alumno ${Nombre_A} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloAlumno.queryaddStudent, 
        [   ID_Alumno,
            ID_Grupo,
            Nombre_A,
            Apellidos_A,
            Materia
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del alumno ${Nombre_A}`})
            return
        }
 
        res.json({msg: `El alumno ${Nombre_A} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}




module.exports = {getStudent, getStudentByID ,addStudent}