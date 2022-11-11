const mongoose = require('mongoose');

const uri = "mongodb+srv://andrevrj:<968741>@cluster0.9mvo2be.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    senha: String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    UserModel,
};