import React from 'react';
import logo from './emitte.png';
import right from './right.png';
import visible from './hidden.png';
import emailu from './email.png';
import './App.css';

function App() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  // if(isVisible) {
  //   setInputType("text")
  // } else {
  //   setInputType("password")
  // }

  return (
    <div className="App">
      <div className="Login">
        <div className="Left-login">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="Login-box">
            <div className="Login-box-header">
              <h3>Faça seu login</h3>
            </div>
            <div className="Login-box-body">
              <form className="Login-box-form">
            <div className="Login-box-line">
                <input
                  className="Login-box-input"
                  placeholder="Digite seu e-mail"
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <img src={emailu} className="Login-box-icon" alt="email"/>
                </div>
                <div className="Login-box-line">
                <input
                  className="Login-box-input"
                  placeholder="Senha"
                  type={(isVisible) ? "text" : "password"}
                  id="email"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img src={visible} className="Login-box-icon" alt="hidden" onClick={() => setIsVisible(!isVisible)} />
                </div>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Esqueceu sua senha?
        </a>
                <button className="Login-box-submit" onClick={() => setIsLoading(true)}>
                  <p>
                    {isLoading ? 'Carregando' : 'Fazer Login'}
                  </p>
                </button>
              </form>
              <h1>
              </h1>
            </div>
          </div>
                <div className="Cadastro">
                <p className="Cadastro-Text">Não possui um cadastro?</p>
                <a
                  className="Cadastro-Link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                > Cadastre-se </a>
                </div>
        </div>
        <div className="Right-login">
        <img src={right} className="Right-background" alt="Competi" />
        </div>
      </div>
    </div>
  );
}

export default App;
