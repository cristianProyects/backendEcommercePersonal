const { ExtractJwt, Strategy } = require("passport-jwt");
const { config } = require("../../../config/config");
const { models } = require('../../../libs/sequelize');
const boom = require('@hapi/boom');

const jwtStrategy =
    new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret,
    },
    async (payload, done) => {
            try {
                const _user = await models.User.findByPk(payload.sub);
                if (!_user ) {
                    return done(boom.unauthorized(), false); //en caso de que el user no exista acceso denegado
                }
                done(null, _user); //permite el acceso y da permiso a las rutas designadas
            } catch (error) {
                done(error, false); // en caso de no encontrar el encabezado arroja un error y deniega el acceso
            }
        }
    )

module.exports = jwtStrategy