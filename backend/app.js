const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const { errors } = require('celebrate');
const { ServerErrorHandler } = require('./errors/errorHandlers/ServerErrorHandler');
const { NotFoundErrorHandler } = require('./errors/errorHandlers/NotFoundErrorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT = 3000 } = process.env;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
});

app.use(requestLogger);

app.get('/crash-test', () => {
    setTimeout(() => {
        throw new Error('Сервер сейчас упадёт');
    }, 0);
});

app.use(routes);
app.use(errorLogger);

app.use(errors());
app.use('*', NotFoundErrorHandler);
app.use(ServerErrorHandler);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})