import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  email: String,
  studentProfile: {type: Schema.Types.ObjectId, ref: "Student"}
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export {
  User
}