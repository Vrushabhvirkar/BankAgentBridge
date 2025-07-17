const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://vegcarton08:hrRvAYSe5xpBylhR@bankagentbridgegrievanc.cqdkm.mongodb.net/amit2",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("No Connection to Database");
})
