const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const schoolRoutes = require('./routes/schoolRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => res.send('API is running!'));

app.use('/api', schoolRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
