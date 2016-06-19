const Romulus = {
    profile: {
        name: "Romulus Remos",
        location: "Downtown",
        occupations: ["Tech Support", "Tech Support Manager", "Learning Systems Administrator"],
        occupationsLatest: "Learning Systems Administrator",
        hobbies: ["reading", "coding", "biking"]
    },
    skills: [{
        "id": 1,
        "name": "Javascript",
        "experience": "Intermediate"
    }, {
        "id": 2,
        "name": "Troublshooting",
        "experience": "Advanced"
    }, {
        "id": 3,
        "name": "Angular JS",
        "experience": "Beginner"
    }],
    secrets: [
        "I'm getting better",
        "I'm staying positive",
    ]
};
module.exports = {
    Romulus,
    getName(req, res, next) {
        res.status(200).json(Romulus.profile.name);
    },
    getLoc(req, res, next) {
        return res.status(200).json(Romulus.profile.location);
    },
    getoccs(req, res, next) {
        if (req.query.order === "desc") {
            Romulus.profile.occupations = Romulus.profile.occupations.reverse();
        } else if (req.query.order === "asc") {
            Romulus.profile.occupations = Romulus.profile.occupations.sort();
        }
        return res.status(200).json(Romulus.profile.occupations);
    },
    getoccsLat(req, res, next) {
        for (var i = 0; i < Romulus.profile.occupations.length; i++) {
            return res.status(200).json(Romulus.profile.occupations[Romulus.profile.occupations.length - 1]);
        }
    },
    getHobbies(req, res, next) {
        if (req.query.order === "desc") {
            Romulus.profile.hobbies = Romulus.profile.hobbies.reverse();
        } else if (req.query.order === "asc") {
            Romulus.profile.hobbies = Romulus.profile.hobbies.sort();
        }
        return res.status(200).json(Romulus.profile.hobbies);
    },
    getSecrets(req, res, next) {
        return res.status(200).json(Romulus.secrets);
    },
    getSkls(req, res, next) {
        let skillsList = [];
        if (req.query.experience) {
            Romulus.skills.forEach(function(fn) {
                if (req.query.experience === fn.experience) {
                    skillsList.push(fn);
                }
            });
            return res.status(200).json(skillsList);
        } else {
            return res.status(200).json(Romulus.skills);
        }
    },

    // PUTS

    chgName(req, res, next) {
        Romulus.profile.name = req.body.name;
        res.status(200).json(Romulus.profile.name);
    },
    updtLoc(req, res, next) {
        Romulus.profile.location = req.body.location;
        return res.status(200).json(Romulus.profile.location);
    },

    // ADDS

    addoccs(req, res, next) {
        Romulus.profile.occupations.push(req.body.occupations);
        res.status(200).json(Romulus.profile.occupations);
    },
    addHobbies(req, res, next) {
        Romulus.profile.hobbies.push(req.body.hobbies);
        return res.status(200).json(Romulus.profile.hobbies);
    },
    addSkills(req, res, next) {
        Romulus.skills.push(req.body);
        console.log(req.body);
        return res.status(200).json(Romulus.skills);
    }
};
