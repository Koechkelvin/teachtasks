const express =require("express");
const app = express();
const{ PrismaClient} = require ("@prisma/client");
const { parse } = require("dotenv");
const prisma = new PrismaClient();
const route=require('./router/router')
app.use(express.json());
app.use( route);

// app.get("/",async( req,res)=>{
// const allUsers = await prisma.user.findMany();
// res.json(allUsers);
// })

// app.post("/",async( req,res)=>{
//     const newUser = await prisma.user.create({data:req.body});
//     res.json(newUser); 
//     })



//         app.delete ("/:id",async( req,res)=>{
//             const id = req.params.id;
//             const deletedUser= await prisma.user.update({
//                 where:{id: parseInt(id) },
//         });
//             res.json(deletedUser); 
//             })


app.listen(4000, ()=>console.log(`Server running on port ${4000}`)); 