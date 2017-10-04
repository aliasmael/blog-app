export const config = {
  port: 3000,
  host: '0.0.0.0',
  mysql: { database: 'blog', username: 'root', password: 'abdo' },
  hash: {
    saltRounds: 10
  },
  jwt: {
    issuer: "lol-lol"
  }
}