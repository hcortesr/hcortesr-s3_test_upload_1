import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde Express con TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});