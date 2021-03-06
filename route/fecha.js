const {Router} = require('express')
const Fecha = require('../models/SanMartin//Fecha')

const router = Router()


//obtener un dato
router.get('/api/fecha/:id', async (req, res) => {
    let {id} = req.params
    Fecha.findById(id)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
})


//obtener todos los datos
router.get('/api/fecha', (req, res) => {
    Fecha.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/fecha', async (req, res) => {
    await Fecha.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/fecha/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Fecha.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/fecha/',async (req, res) => {
    try{        
        await Fecha.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/fecha/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Fecha.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router