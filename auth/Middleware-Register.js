// implement the protected middleware that will check for username and password
// in the headers and if valid provide access to the endpoint
const protected(() => (req, res, next)) {
    if(!user && !bcrypt.compareSync(password, user.password)) {
        res.state(400).json({ error: "Wrong password or username"})
    } else {
        next()
    }
}

module.exports = protected; 