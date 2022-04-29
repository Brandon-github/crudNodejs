import model from '../models/userModel';

const controller = {};

controller.validationUser = (req, res) => {
    const { user, password } = req.body;

    if (user != '' && password != '') {
        model.validationUser([user, password], (err, rows, fields) => {
            if (!err) {
                if (rows.length == 1) {
                    res.redirect('/system')
                } else {
                    res.redirect('/login?user=jh');
                }
            } else {
                console.log(err);
            }
        })
    }
}

controller.addUser = (req, res) => {
    const { name, email, password, password2 } = req.body;
    
    if (name != '' && email != '' && password === password2) {
        model.addUser([name, email, password], (err, rows, fields) => {
            if (!err) {
                res.redirect('/');
            } else {
                console.log(err);
            }
        });
    } else if (password !== password2) {
        res.redirect('/register');
    } else {
        res.redirect('/register');
    }
}

export default controller;