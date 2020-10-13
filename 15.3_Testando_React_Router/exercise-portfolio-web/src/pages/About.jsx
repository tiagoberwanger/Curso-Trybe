import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Content.css'

class About extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
        <Link to="/">Início</Link>
        </header>
        <section className="main-content">
        <h1>
          Sobre
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu est eu erat vestibulum eleifend ut sed sem. Suspendisse a mauris euismod, iaculis nisl ultrices, rutrum massa. Duis pharetra augue erat, vel ullamcorper lacus varius a. Suspendisse vel dictum massa. In vel lorem ac mi sagittis consectetur. Morbi mauris ligula, finibus vel eleifend non, cursus eu quam. Suspendisse a risus ante. Praesent sodales, nulla eu tempus interdum, nisl erat tincidunt augue, vel iaculis nunc enim ac massa. Sed ullamcorper sollicitudin ultrices. Quisque quis maximus nibh, sed vulputate libero. Suspendisse faucibus vitae dui eu vulputate. Pellentesque posuere tempor blandit.
        </p>
        <p>
          Curabitur felis lectus, imperdiet eget tellus eu, vulputate blandit neque. Suspendisse molestie commodo faucibus. Ut fringilla gravida justo. Mauris faucibus nibh sed ligula laoreet ullamcorper. Donec mattis turpis at augue malesuada, ac dapibus elit fermentum. Curabitur sit amet varius est, nec vehicula tellus. Aliquam venenatis ante in ex rutrum faucibus.
        </p>
        <p>
          Sed justo massa, porttitor vitae aliquam ac, finibus et dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pulvinar ligula quam. Nulla quis odio odio. Nulla velit nisi, pharetra a mattis eu, hendrerit imperdiet metus. Vivamus porta nulla id blandit tempor. In mi massa, euismod a mi id, fringilla interdum ante. In maximus sollicitudin ligula eget interdum.
        </p>
        </section>
      </div>
    );
  };
}

export default About;
