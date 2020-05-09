const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/suprep', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const User = db.model('User', {
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const user = new User({
//     name: 'sanjeev',
//     email: 'sanjivhs16@gmail.com',
//     password: 'sanjivehs12'
// });

// user.save().then( () => {
//     console.log(user);
// }).catch( (e)=>{
//     console.log("Error: ", e);
// });

// module.exports = User;