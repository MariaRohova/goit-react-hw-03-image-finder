import { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { Backdrop, ModalWrapper } from './Styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={this.props.url} alt="" />
        </div>
      </div>
      
    );
  }
}
