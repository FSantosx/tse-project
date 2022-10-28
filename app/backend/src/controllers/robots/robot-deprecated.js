const
START       = true
, TSE       = require('./tse')
, CronJob   = require('cron').CronJob
, fs        = require('fs')
, cronTimer = "5 * * * * *"
;;

module.exports = class Robot {   
    static init(){
        let ret
        new CronJob(cronTimer,  async function () {
            ret = await TSE.init()
            fs.writeFile(`./src/var/data.json`, JSON.stringify(ret), (err) => {
                if(err) throw err;
            })
        }, null, true, 'America/Sao_Paulo')
    }
}
