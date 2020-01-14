import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import FontAwesome from 'react-fontawesome'


class PortfolioApplicationFormPopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
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
        <div className="portfolio-apply-btn" onClick={this.openForm}>Apply Now <FontAwesome
        className="apply-arrow-right"
        name="arrow-right"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      /></div>
        
      </div>
    );
  }
}

export default PortfolioApplicationFormPopup;