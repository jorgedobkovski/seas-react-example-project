import React from 'react';

const Footer : React.FC = () => {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: "#2b5892", color: "white" }}>
      <div className="container-fluid">
        <div className="row text-center text-lg-start">
          
          {/* Divisão Esquerda (Brasão e Setor) */}
          <div className="col-lg-3 col-12 p-3 p-lg-0 d-flex align-items-center justify-content-center">
              <img src="https://cdn.sistemas.ro.gov.br/imgs/brasao-rondonia.png" className="logo-governo" alt="Logotipo do Governo" style={{ width: "50px", height: "auto" }} /> 
              <span className="text-white mx-2">|</span>
              <span className="text-white">GTIC/SEAS</span>
          </div>
          
          {/* Divisão Central (Contatos) */}
          <div className="col-lg-6 col-12 p-0 d-flex justify-content-center justify-content-lg-between align-items-center flex-column flex-lg-row my-3 my-lg-0">
              <span className="bg-secondary h-100 divider footer-divider" style={{ width: "1px" }}></span>
              <div className="d-flex flex-column justify-content-center text-center mx-2 gap-1 gap-lg-0">
                  <span className="text-white" style={{fontSize: "0.9rem"}}>Para mais informações entrar em contato com os canais de comunicação:</span>
                  <span className="text-white" style={{fontSize: "0.9rem"}}>
                      Telefone (WhatsApp): <a href="tel:+55 (69) 9 9951-9534" className="text-white fw-bold text-decoration-none">+55 (69) 9 9951-9534</a>
                  </span>
                  <span className="text-white" style={{fontSize: "0.9rem"}}>
                      Geração Emprego: <a href="mailto:suporte@geracaoemprego.ro.gov.br" className="text-white fw-bold text-decoration-none">suporte@geracaoemprego.ro.gov.br</a>
                  </span>
              </div>
              <span className="bg-secondary h-100 divider footer-divider" style={{ width: "1px" }}></span>
          </div>
          
          {/* Divisão Direita (Políticas) */}
          <div className="col-lg-3 col-12 p-0 text-center d-flex align-items-center justify-content-center">
              <span className="text-white">Aviso de Privacidade</span>
              <span className="text-white mx-2 fw-bold">.</span>
              <span className="text-white">Política de Privacidade</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
