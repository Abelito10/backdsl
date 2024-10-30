const express = require('express');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());

app.use('/api/users', userController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
