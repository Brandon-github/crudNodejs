import express from "express";
import path from 'path';
import morgan from "morgan";

import indexRoutes from './routes/index.routes';
import roleRoutes from './routes/role.routes';


// Start Application
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middelware
app.use(morgan('dev'));

// Routes
app.use('/', indexRoutes);
app.use('/role', roleRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;