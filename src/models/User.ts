import { Schema, model } from 'mongoose';
import { uuid } from 'uuidv4';

const UserSchema = new Schema({
    id: {type: String, default: uuid, require, unique: true},
    name: {type: String, require},
    email: {type: String, require},
    pass: {type: String, require}
})

const User = model('User', UserSchema)

export default User;