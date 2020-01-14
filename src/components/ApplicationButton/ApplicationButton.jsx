import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class ApplicationFormPopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
    window.fbq('trackCustom', 'ApplicationClick');
  }

  render() {
    return (
      <div className="application-form-popup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://pledgervoice.typeform.com/to/n1yqWc"
          hideHeaders
          hideFooter
          width="80%"
          style={{ display: 'none'}}
          ref={tf => {
            this.typeformEmbed = tf;
            
          }}
        />
        <div className="apply-btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>Apply Now</div>
      </div>
    );
  }
}

export default ApplicationFormPopup;