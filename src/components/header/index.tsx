import React from 'react';

import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <header className="bg-whirlpool w-auto pl-8 pt-4 pb-4 mb-8">
    <img className="w-28" src={logo} />
  </header>
)

export default Header;