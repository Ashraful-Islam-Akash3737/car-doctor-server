/**
 * install jsonwebtoken
 * jwt.sign( payload, secret, {expiresIn: })
 * token client
 */


/***
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type --> (XSS attack can retrieve all info)
 * 3. cookies: http only
 */