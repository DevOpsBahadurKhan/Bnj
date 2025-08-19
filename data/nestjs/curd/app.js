require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

let app = express();

const mongoose = require('mongoose');
const cors = require('cors');

// mongo connect String
mongoose.connect(process.env.mongoURL);


app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5500',
  credentials: true
}));

app.use('/auth', require('./routes/auth.route'));
app.use('/api/user', require('./routes/user.route'));
app.use('/api/admin', require('./routes/admin.route'));

app.use(require('./middleware/passport')().initialize());

// 404 Fallback + Error Handler
app.use(require('./middleware/fallback404'));
app.use(require('./middleware/errorHandler'));


app.listen(process.env.port, () => console.log('Running...'));