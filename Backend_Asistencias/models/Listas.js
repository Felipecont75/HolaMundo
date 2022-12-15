const modeloListas = {
    queryGetPase_de_lista: "SELECT * FROM Listas L LEFT JOIN Alumnos A ON A.ID_Alumno = L.ID_Grupo;",
    queryListaExists: `SELECT ID_Alumno FROM Listas WHERE ID_Alumno = ?`,
    queryaddAsistencia: `
    INSERT INTO Asistencia (
        Id_Alumno,
        Fecha,
        Estatus_Asistencia
    ) VALUES (
        ?,
        ?,
        ?)`
    }

    module.exports = modeloListas