const mainCtrl = require('/mainCtrl');

module.exports = function(app) {
    // GETS

    // ****** VERIFY USER BEFORE ACCESS ******
    app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);
    // ****** VERIFY USER BEFORE ACCESS ******
    app.get('/name', mainCtrl.getName);
    app.get('/location', mainCtrl.getLoc);
    app.get('/occupations', mainCtrl.getoccs);
    app.get('/occupations/latest', mainCtrl.getoccsLat);
    app.get('/hobbies', mainCtrl.getHobbies);

    app.get('/skills', mainCtrl.getSkls);

    // PUTS
    app.put('/name', mainCtrl.chgName);
    app.put('/location', mainCtrl.updtLoc);

    // POSTS
    app.post('/hobbies', mainCtrl.addHobbies);
    app.post('/occupations', mainCtrl.addoccs);

    app.post('/skills', middleware.generateId, mainCtrl.addSkills);

};
