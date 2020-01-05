const { Router } = require ('express');

const ruta = Router();

ruta.get('/', (req, res)=>{
    res.render('index')
})

//BIENVENIDA
ruta.get('/bienvenida',(req, res)=>{
    res.render('bienvenida/bienvenida')
})
//JDN
ruta.get('/jdn', (req, res) =>{
    res.render('jdn/index')
})

//TUCUMAN
ruta.get('/Tucuman', (req, res)=>{
    res.render('Diocesis/Tucuman/Tucuman')
})
ruta.get('/tucuman/cimas',(req, res) =>{
    res.render('trabajando/trabajando')
})

ruta.get('/tucuman/escuela', (req, res) =>{
    res.render('trabajando/trabajando')
})

//CORDOBA
ruta.get('/Cordoba', (req, res)=>{
    res.render('Diocesis/Cordoba/Cordoba')
})
ruta.get('/cordoba/cimas',(req,res) =>{
    res.render('Diocesis/Cordoba/trabajando')
})
ruta.get('/cordoba/escuela',(req, res) =>{
    res.render('Diocesis/Cordoba/trabajando')
})

//CAFAYATE
ruta.get('/Cafayate',(req,res) =>{
    res.render('Diocesis/Cafayate/Cafayate')
})

ruta.get('/cafayate/cimas',(req, res) =>{
    res.render('trabajando/trabajando')
})

ruta.get('/cafayate/escuela',(req, res) =>{
    res.render('trabajando/trabajando')
})

//RIO CUARTO
ruta.get('/RioCuarto', (req,res) =>{
    res.render('Diocesis/RioCuarto/RioCuarto')
})
ruta.get('/RioCuarto/cimas',(req, res) =>{
    res.render('trabajando/trabajando')
})
ruta.get('/RioCuarto/escuela',(req, res) =>{
    res.render('trabajando/trabajando')
})

//COMISIONES
ruta.get('/historia',(req, res)=>{
    res.render('Comisiones/Historia/Historia')
})

ruta.get('/espiritualidad',(req, res) =>{
    res.render('Comisiones/Espiritualidad/espiritualidad')
})


//ESTRUCTURA
ruta.get('/estructura',(req,res) =>{
    res.render('estructura/estructura')
})


//RETIROS
ruta.get('/eslabon',(req,res) =>{
    res.render('trabajando/trabajando')
})

ruta.get('/jornada',(req,res) =>{
    res.render('trabajando/trabajando')
})

ruta.get('/enganche',(req,res) =>{
    res.render('trabajando/trabajando')
})

ruta.get('/totus',(req,res) =>{
    res.render('trabajando/trabajando')
})

module.exports = ruta;