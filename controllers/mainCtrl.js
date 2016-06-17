const profile = {
    name: "Romulus Remos",
    location: "Downtown",
    occupations: ["playa", "love doctor", "style coach"],
    occupationsLatest: "all of the above!",
    hobbies: ["living", "laughing", "loving"]
};

module.exports = {
    getName(req, res, next) {
        return res.status(200).json(profile.name);
    },
    getLocation(req, res, next) {
        return res.status(200).json(profile.location);
    },
    getOccupationslatest(req, res, next) {
        return res.status(200).json(profile.occupations / latest);
    },
    getOccupations(req, res, next) {
        profile.occupations = profile.occupations.sort();
        if (req.query.order === 'desc') {
            profile.occupations = profile.occupations.reverse();
        }
        return res.status(200).json(profile.occupations);
    },
    getHobbies(req, res, next) {
        return res.status(200).json(profile.hobbies);
    },

    createProfile(req, res, next) {
        profile.occupations.push(req.body.occupations);
        return res.status(200).json(profile.occupations);
    },
    createName(req, res, next) {
        profile.name = req.body.name;
        return res.status(200).json(profile.name);
    },
    createLocation(req, res, next) {
        profile.location = req.body.location;
        return res.status(200).json(profile.location);
    },
    createHobbies(req, res, next) {
        console.log('createHobbies');
        profile.hobbies.push(req.body.hobbies);
        return res.status(200).json(profile.hobbies);
    }
};
