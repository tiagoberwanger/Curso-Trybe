import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
        <Link to="/">Início</Link>
        </header>
        <section className="main-content">
          <h1>
            Contato
          </h1>
          <h3 className="social-icons">
            <SocialIcon target="_blank" url="https://github.com/tiagoberwanger" />
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/tiago-berwanger/" />
            <SocialIcon target="_blank" url="mailto:berwangertiago@gmail.com" />
            <SocialIcon target="_blank" url="https://api.whatsapp.com/send?phone=5548999445479" />
          </h3>
        </section>
      </div>
    );
  };
}

export default Contact;
