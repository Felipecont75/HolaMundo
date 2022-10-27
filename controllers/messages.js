const rootMessage = (req,res) => {
    res.send('Mensajes')}

const hiMessage =(req,res) => {
    res.send('Hola Mundo')}

const byMessage = (req,res) => {
    res.send('Adios Mundo')}

    const postMessage = (req,res) => {
    res.send('Mensaje POST')}

    const putMessage = (req,res) => {
        res.send('Mensaje PUT')}

        const deleteMessage = (req,res) => {
            res.send('Mensaje DELETE')}



    

    module.exports = {rootMessage, hiMessage, byMessage,postMessage,putMessage,deleteMessage}