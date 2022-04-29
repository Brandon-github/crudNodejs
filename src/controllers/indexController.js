const controller = {};

controller.getHomeView = (req, res) => {
    res.render('index');
}

controller.getLoginView = (req, res) => {
    res.render('login');
};

controller.getRegisterView = (req, res) => {
    res.render('register');
}

controller.getSystemView = (req, res) => {
    res.render('system');
}


export default controller;