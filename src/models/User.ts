import { Schema, model } from 'mongoose';
import { v4 } from 'uuid';

const UserSchema = new Schema({
    id: {type: String, default: v4, require, unique: true},
    name: {type: String, require},
    email: {type: String, require},
    pass: {type: String, require}
})

const User = model('User', UserSchema)

export default User;