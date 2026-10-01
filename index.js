import express from 'express'
const app = express();
import dotenv from 'dotenv'
import router from './routes/routes.js';
dotenv.config()
const PORT = process.env.PORT

app.use(express.json());
app.use('/student', router)
app.post('/student/:id',router)
app.put('/student/:id',router)
app.patch('/student/:id',router)
app.delete('/student/:id',router)
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
