const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const influencerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    joinedCampaigns: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Campaign"
        }
    ]
})

influencerSchema.statics.register = async function register(username, email, password) {

    const exists = await this.findOne({ email })

    if ( !username || !password || email ) {
        throw Error("All fields are required")
    }

    if (exists) {
        throw Error("Email already exists")
    }

    if (!validator.isEmail(email)) {
        throw Error("Invalid email address format")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Weak Password used")
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await this.create({ username, email, password : hash })

    return user
    
}

influencerSchema.statics.login = async function login(email, password) {
    
    if ( !password || !email ) {
        throw Error("All fields are required")
    }
    
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Email doesn't exist")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error("Wrong Password")
    }

    return user

}

module.exports = mongoose.model('Influencer', influencerSchema)