import app from '../app';

// Listener Server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});