//load page dependecy with browserify
var page = require('page');
var main = document.getElementById('main-container');
var yo_yo =  require('yo-yo');
var empty = require('empty-element');

page('/', function (ctx, next){
	main.innerHTML = '<a href="/signup">SignUp</a>';
})

page('/signup' , function (ctx, next){

	var el = yo_yo`<div class="container">
            <div class="row">
                <div class="col s10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img class="iphone"src="iphone.png" alt="">
                        </div>
                        <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="platzigram">Platzigram</h1>
                                    <form action="" class="signup-form">
                                        <h2>Registrate para ver fotos de tus amigos :)</h2>
                                        <div class="section">
                                            <a class="btn btn-fb hiden-on-small-only">Iniciar sesión con Facebook</a>
                                            <a class="btn btn-fb hiden-on-small- hide-on-med-and-up">Iniciar sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="Correo electrónico" />
                                            <input type="text" name="name" placeholder="Nombre completo" />
                                            <input type="text" name="username" placeholder="Nombre de usuario" />
                                            <input type="password" name="password" placeholder="Contraseña" />
                                            <button class="btn btn-signup waves-effect waves-light" type="submit">Regístrate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

       empty(main).appendChild(el);
})

page();











//var numeros = [400, 200,1,-23];


//function that executes for each element of the array

//with vanilla JS
// var numerosPlus1 = numeros.map(function(numero){
// 	return numero + 1;
// })

//Ecma script 5

//var numerosPlus1 = numeros.map(n => n+1);


//console.log(numerosPlus1);

