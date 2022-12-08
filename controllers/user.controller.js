const User = require('../models/user.model');
const people = require('../assets/people.json');

class userController {
    get(req, res) {
        //return res.json('da nhan duoc yeu cau cua ban !');

        const filter = req.query.filter;
        const filterPeople = people.filter(person => person.first_name.includes(filter));
        return res.json({data: filterPeople,length: filterPeople.length});
    }

    post(req, res) {
        const filter = req.body.filter;
        console.log('filter', filter);
        return res.status(200).json({ result: `Chao ban` });
    }
}

module.exports = new userController();