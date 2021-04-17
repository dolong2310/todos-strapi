module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: 'https://c554b4d4dbf5.ngrok.io',
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "7f7fcac5fe688c485ddab7de83053b37"),
    },
  },
});
