const
START       = true
, Axios     = require('axios')
, config    = {
    host_ : "https://resultados.tse.jus.br"
    , uri_: "/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
}
;;

module.exports = class Tse {

    static async once(link){
        try {
            const req = await Axios(link);
            const data = req?.data.cand
            return data
        } catch (err){
            console.trace(err);
        }
    }

    static async init (){
        const link = config.host_ + config.uri_ 
        const res = await this.once(link);
        return res
    }
}