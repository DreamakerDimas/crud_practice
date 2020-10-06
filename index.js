const express = require('express');
const UserController = require('./controllers/UserController');
const validateUser = require('./middlewares/user/validateUser');

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(express.json());
// создание нового пользователя
app.post('/user', validateUser, UserController.createUser);

// получение инфы о пользователе по id
app.get('/user/:id', UserController.getUser);

// обновление инфы пользователя
app.patch('/user/:id', validateUser, UserController.updateUser);

// удаление пользователя
app.delete('/user/:id', UserController.deleteUser);

app.listen(PORT, () => console.log(`App listening on ${PORT} port!`));
