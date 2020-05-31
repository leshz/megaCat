const sendNewUser = (data) => `
  <style>
    body {
      font-family: sans-serif;
      line-height: 1.5em;
    }
  </style>
  <h1>Hola ${data.firstName} ${data.lastName}</h1>
  <p>Le damos la bienvenida a Nextep Labs, use estas credenciales en nuestra plataforma para acceder a todas las características creadas para usted:</p>

  <ul>
    <li><strong>Username: </strong>${data.username}</li>
    <li><strong>Password: </strong>${data.password}</li>
  </ul>
`

module.exports = sendNewUser
