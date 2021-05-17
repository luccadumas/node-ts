import express from 'express';
import routes from './routes';

const app = express();
app.use('/api', routes);

app.get('/', (req, res) => {
    return res.json({message: 'Teste'});
})

app.listen(3333);