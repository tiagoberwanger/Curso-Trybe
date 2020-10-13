import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">Início</Link>
        </header>
        <section className="main-content">
        <h1>
          Projetos
        </h1>
        <h3>
          Projeto 1
        </h3>
        <p>
          Sed justo massa, porttitor vitae aliquam ac, finibus et dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pulvinar ligula quam. Nulla quis odio odio. Nulla velit nisi, pharetra a mattis eu, hendrerit imperdiet metus. Vivamus porta nulla id blandit tempor. In mi massa, euismod a mi id, fringilla interdum ante. In maximus sollicitudin ligula eget interdum.
        </p>
        <h3>
          Projeto 2
        </h3>
        <p>
          Sed justo massa, porttitor vitae aliquam ac, finibus et dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pulvinar ligula quam. Nulla quis odio odio. Nulla velit nisi, pharetra a mattis eu, hendrerit imperdiet metus. Vivamus porta nulla id blandit tempor. In mi massa, euismod a mi id, fringilla interdum ante. In maximus sollicitudin ligula eget interdum.
        </p>
        <h3>
          Projeto 3
        </h3>
        <p>
          Sed justo massa, porttitor vitae aliquam ac, finibus et dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pulvinar ligula quam. Nulla quis odio odio. Nulla velit nisi, pharetra a mattis eu, hendrerit imperdiet metus. Vivamus porta nulla id blandit tempor. In mi massa, euismod a mi id, fringilla interdum ante. In maximus sollicitudin ligula eget interdum.
        </p>
        </section>
      </div>
    );
  };
}

export default Projects;
