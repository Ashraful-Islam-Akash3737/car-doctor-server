/****
 * __________----------____________
 *         MAKE API SECURE
 * __________----------____________
 *  the person who should have access
 * 
 * concept:
 * 1. assign two tokens for each person(access token, refresh token)
 * 2. access token contains: user identification(email, role, etc.)-----valid for a shorter duration.
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh token is invalid then logout the user.
 */
 
/***
 * 1. jwt --> json web token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. in options use{http only, secure, sameSite}
 * 4. from client side: if use axios --> {withCredentials: true}
 * 5. cors setup:
 * app.use(cors({
 *  origin: ['http://localhost:5173'],
 *   credentials: true,
 * }))
 * 6.  
 */

/***
 * 1. for secure api calls
 * 2. server side: install cookie parser and use it as a middleware
 * 3. req.cookie
 * 4. client side: make api calls using axios { withCredentials : true}
 * or { credentials: 'include'} while using fetch
 * 
 */