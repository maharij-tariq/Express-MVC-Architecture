
import express from 'express';
import dotenv from 'dotenv';
import router from './router/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
