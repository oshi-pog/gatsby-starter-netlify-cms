import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import './MailChimpForm.scss'

const url = "//palmtreedigitalcph.us4.list-manage.com/subscribe/post?u=fd6e8387ef7de36d98788b27f&amp;id=d63036de09";

const CustomForm = ({ status, message, onValidated}) => {
    let email;
    const submit = (e) =>  
        
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });
  
    return (
      <div className="mailchimp-block">
        {status === null && <div className="mailchimp-message">Get our marketing tips in your inbox</div>}
        {status === "sending" && <div className="mailchimp-message" style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div 
            className="mailchimp-message"
            style={{ color: "red" }}
          >Failed, try again</div>
        )}
        {status === "success" && (
          <div
            className="mailchimp-message"
            style={{ color: "#3ECF7F" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div className="mailchimp-flex">
            <input
                className="mailchimp-email"
            ref={node => (email = node)}
            type="email"
            placeholder="Your email address"
            />
            <button type="submit" className="mailchimp-submitBtn" onClick={submit}>
            Subscribe
            </button>
        </div>
      </div>
    );
  };
  

function MailChimpForm() {
    return (
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    );
} 

export default MailChimpForm;
