const express =require("express");
const app = express();
const{ PrismaClient} = require ("@prisma/client");
const { parse } = require("dotenv");
const prisma = new PrismaClient();
const route=require('./router/router')
app.use(express.json());
app.use( route);



app.listen(4000, ()=>console.log(`Server running on port ${4000}`)); 