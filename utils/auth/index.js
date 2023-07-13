const passport = require('passport');

const LocalStrategy = require('./strategies/local');
const jwtStrategy = require('./strategies/jwt');

passport.use(LocalStrategy);
passport.use(jwtStrategy);