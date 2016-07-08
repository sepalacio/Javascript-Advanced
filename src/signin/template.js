var yo =  require('yo-yo');
var landing = require('../landing');   

var signInForm = yo`  <div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form action="" class="signup-form">
                <div class="section">
                    <a class="btn btn-fb hiden-on-small-only">Iniciar sesión con Facebook</a>
                    <a class="btn btn-fb hiden-on-small- hide-on-med-and-up">Iniciar sesión</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="username" placeholder="Nombre de usuario" />
                    <input type="password" name="password" placeholder="Contraseña" />
                    <button class="btn btn-signup waves-effect waves-light" type="submit">Iniciar sesión</button>
                </div>
            </form>
            </div>
        </div>
        <div class="row">
            <div class="login-box">
                ¿No Tienes una cuenta? <a href="/signup">Regístrate</a>
            </div>
        </div>
    </div>`;

module.exports = landing(signInForm);