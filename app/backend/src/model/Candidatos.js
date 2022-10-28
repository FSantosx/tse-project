const mongoose = require('mongoose')

const Candidatos = mongoose.model("Candidatos", {
    seq     : Number,
    sqcand  : Number,
    n       : Number,
    nm      : String,
    cc      : String,
    nv      : String,
    e       : String,
    st      : String,
    dvt     : String,
    vap     : Number,
    pvap    : Number
})


module.exports = Candidatos