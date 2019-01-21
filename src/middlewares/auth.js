'use strict'

const AuthService = require('../services/auth');

async function isAuthNormal(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'Your do not have authorization'
        })
    }
    const token = req.headers.authorization.split(" ")[1];
    AuthService.decodeToken(token).then(response => {
        req.user = eval(response)        
        if (req.user == 0 || req.user == 1 || req.user == 2 || req.user == 3) {
            next()
        } else {
            res.status(403).send({
                message: 'Your do not have authorization level'
            })
        }

    }).catch(response => {
        res.status(403).send({
            message: 'Your do not have authorization',
            error: 'Bad Token'
        })
    })
}

async function isAuthSupport(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'Your do not have authorization'
        })
    }
    const token = req.headers.authorization.split(" ")[1];
    AuthService.decodeToken(token).then(response => {
        req.user = eval(response)
        if (req.user == 1 || req.user == 2 || req.user == 3) {
            next()
        } else {
            res.status(403).send({
                message: 'Your do not have authorization level'
            })
        }

    }).catch(response => {
        res.status(403).send({
            message: 'Your do not have authorization',
            error: 'Bad Token'
        })
    })
}

async function isAuthAdmin(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'Your do not have authorization'
        })
    }
    const token = req.headers.authorization.split(" ")[1];
    AuthService.decodeToken(token).then(response => {
        req.user = eval(response)        
        if (req.user == 2 || req.user == 3) {
            next()
        } else {
            res.status(403).send({
                message: 'Your do not have authorization level'
            })
        }

    }).catch(response => {
        res.status(403).send({
            message: 'Your do not have authorization',
            error: 'Bad Token'
        })
    })
}


async function isAuthDeveloper(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: 'Your do not have authorization'
        })
    }
    const token = req.headers.authorization.split(" ")[1];
    AuthService.decodeToken(token).then(response => {
        req.user = eval(response)        
        if (req.user == 2 || req.user == 3) {
            next()
        } else {
            res.status(403).send({
                message: 'Your do not have authorization level'
            })
        }

    }).catch(response => {
        res.status(403).send({
            message: 'Your do not have authorization',
            error: 'Bad Token'
        })
    })
}
module.exports = {
    isAuthNormal,
    isAuthSupport,
    isAuthAdmin,
    isAuthDeveloper
};