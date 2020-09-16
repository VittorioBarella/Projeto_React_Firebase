import React from 'react';
import './login.css';
function Login() {
    return (
        <div className="login-content d-flex align-item-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>

                </div>

                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

                <button className="btn btn-lg btn-block btn-login" type="submit">Sign in</button>
                <div className="msg-login text-white text-center my-5">
                    <span><strong>Wow!</strong> Você está conectado! &#128526;</span>
                    <br />
                    <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128549;</span>
                </div>


                <div className="opcoes-login mt-5 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="text-white"> | </span>
                    <a href="#" className="mx-2">Quero Cadastrar</a>
                </div>
            </form>
        </div >
    )
}

export default Login;
// Quando alguém invocar este arquivo index.js, o certo é devolver a função de login.