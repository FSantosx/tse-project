const Candidato = require("../model/Candidatos")

module.exports = class Candidatos {
    static async save(obj){
        if(!obj) return console.log("não há objetos")
        try {
            await Candidato.create(obj);
            return true
        } catch (err) {
            console.trace(err)
            return false
        }
    }

    static async ls(){
        try {
            const obj = await Candidato.find(obj);
            return obj;
        } catch (err) {
            console.trace(err)
            return false
        }
    }
}