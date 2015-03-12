var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
    name: String,
    location: {
        latitude: String,
        longitude: String
    }
});

mongoose.model('Place', PlaceSchema);