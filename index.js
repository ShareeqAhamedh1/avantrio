import express from "express";
import cors from "cors";

const app=express();
const port=3000;

app.use(cors());

const products=[
    {
      "id": 1,
      "name": "Laptop",
      "price": 1500
    },
    {
      "id": 2,
      "name": "Headphones",
      "price": 200
    }
   ];

   app.get('/api/products',(req,res)=>{
    res.json(products);
   });

   app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
   });