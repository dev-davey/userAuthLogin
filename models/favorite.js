const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsites'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {timestamps: true}
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;