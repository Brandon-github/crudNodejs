import express from "express";
import morgan from "morgan";

// Start Application
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middelware
app.use(morgan('dev'));

export default app;