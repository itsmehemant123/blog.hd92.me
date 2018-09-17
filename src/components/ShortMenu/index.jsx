import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

class ShortMenu extends React.Component {
  render() {
    const shortMenu = this.props.data;

    const shortMenuBlock = (
      <ul className="shortMenu__list">
        {shortMenu.map(item => (
          <li className="shortMenu__list-item" key={item.path}>
            <Link
              exact
              to={item.path}
              className="shortMenu__list-item-link"
              activeClassName="shortMenu__list-item-link shortMenu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );

    return (
      <nav className="shortMenu">
        {shortMenuBlock}
      </nav>
    );
  }
}

export default ShortMenu;
