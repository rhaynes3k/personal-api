const mainCtrl = require('./mainCtrl');

module.exports = (application) => {
    // GET
    application.get(`/name`, mainCtrl.getName);
    application.get(`/location`, mainCtrl.getLocation);
    application.get(`/occupations`, mainCtrl.getOccupations);
    application.get(`/occupations/latest`, mainCtrl.getOccupations);
    application.get(`/hobbies`, mainCtrl.getHobbies);
    // PUT
    application.put(`/name`, mainCtrl.createName);
    application.put(`/location`, mainCtrl.createLocation);
    // POST
    application.post(`/occupations`, mainCtrl.createProfile);
    application.post(`/hobbies`, mainCtrl.createHobbies);
};
