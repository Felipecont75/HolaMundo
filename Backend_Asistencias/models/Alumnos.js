const modeloAlumno = {
    queryGetStudent: "SELECT * FROM Alumnos",
    querygetStudentByID: `SELECT * FROM Alumnos WHERE ID_Alumno = ?`,
    queryStudentExist: `SELECT Nombre_A FROM Alumnos WHERE Nombre_A = ?`,
    queryaddStudent: `
    INSERT INTO Alumnos (
        ID_Alumno,
        ID_Grupo,
        Nombre_A,
        Apellidos_A,
        Materia
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?)`,
    queryGetStudentInfo:
    `SELECT ID_Alumno, ID_Grupo, Nombre_A, Apellidos_A, Materia 
            FROM ID_Alumno 
            WHERE Nombre_A = ?`
    }

    module.exports = modeloAlumno