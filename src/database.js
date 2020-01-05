const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI_ESLABON,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db=> console.log('Base de Datos conectada y corriendo!!!'))
    .catch(err => console.error(err))