const express = require('express');
const router = express.Router();
const CronJob = require('cron').CronJob
const TSE = require("../controllers/robots/tse")
const Cand = require("../controllers/Candidatos")
const cronTimer = "5 * * * * *";

new CronJob(cronTimer,  async () => {
    ret = await TSE.init()
    router.post('/', async (req, res) => {
        const { seq, sqcand, n, nm, cc, nv, e, st, dvt, vap, pvap } = ret
        const obj = { seq, sqcand, n, nm, cc, nv, e, st, dvt, vap, pvap };
        
        try{
            await Cand.save(obj)
            res.status(200).json(cand)        
        } catch (err) {
            res.status(500).json({ error: err })
        }
    })
}, null, true, 'America/Sao_Paulo')

router.get('/', async (req, res) => {
    try {
        const cand = await Cand.ls();
        res.status(200).json(cand)        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = router;