import express from 'express';
import { config } from 'dotenv';
import multer, { MulterError } from "multer";

config();

const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app.post('/file', upload.single('my_file'), (req, res) => {

    console.log(req.file)
    console.log("asf");
    
    
    res.send('¡Hola desde Express con TypeScript!');
});



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});