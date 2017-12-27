const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const generateUUID = require('../common/Unique');
const creatTime = require('../common/creatTime');
const { sqlHandle, readHandle, searchHandle, query } = dbquery;
router.get('/getArticle', (req, res, next) => {
    const sql = `select * from apilist`
    readHandle(sql).then((data)=>{
        res.send({
            code: '0001',
            msg: '获取成功',
            data: data
        })
    })
})

module.exports = router
