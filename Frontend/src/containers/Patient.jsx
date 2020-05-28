import React from 'react';
import NavbarDoctor from '../components/NavbarDoctor'

export default class Patient extends React.Component {
  render() {
    return (
      <>
      <section className="Container">
        <NavbarDoctor/>
      </section>
      <section>
        {this.props.children}
      </section>
      </>
    );
  }
};

