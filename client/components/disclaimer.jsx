import React from 'react';
import useLockBodyScroll from './lock-body-scroll';

export default function Disclaimer(props) {
  useLockBodyScroll();
  return (
    <section className="modal-overlay modal-shade d-flex">
      <div className="disclaimer-content text-white p-3">
        <p>This application is for demonstration purposes only and does not allow for real world transactions.</p>
        <p>By clicking the button below, you acknowledge that you have read and understand this disclaimer.</p>
        <button onClick={props.closeDisclaimer} className="btn btn-color">
          Acknowledge
        </button>
      </div>
    </section>
  );
}
