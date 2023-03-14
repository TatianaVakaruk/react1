import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isExpanded: false,
  };

  toggleContent = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  render() {
    const { isExpanded } = this.state;
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            {isExpanded ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
        </div>
        {this.state.isExpanded && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;