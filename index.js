
import express from "express";
import { dbConnection } from "./config/db.js";
import getData from "./controller/fetchData.js";
const PORT = 5000;

const startServer = async () => {
    try {
        await dbConnection();
        await getData()
    }catch(error){
        console.log(error.message)
    }
};

startServer();
