var User = require('../models/users').User;

exports.addUser = function (user, done) {
    var newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        roomNumber: user.roomNumber,
        email: user.email,
        password: user.password
    });
    newUser.save(function (err) {
       if(err){
           return done(err);
       }
        //indicate success
        done(null);
    });
};