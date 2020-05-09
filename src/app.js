const express = require('express');
require('../mongo/db');
const userRouter = require('../router/user');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../config/swagger.json');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/v1', userRouter);

app.listen(port, () => {
    console.log(`Connected port:${port}, Application is up and Running...`);
});