import React from "react";
import styled from 'styled-components';


const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "hotpink" : "white"};
color: ${props => props.primary ? "white" : "hotpink"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid pink;
border-radius: 3px;
`;

const Wrapper = styled.section`
  padding: 2em;
`;
const Title = styled.h1`
font-size: 2em;
text-align: center;
color: white;
font-family: 'Inconsolata', monospace;
`;

export default class Mailme extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="containerMail">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xeqzwrql"
        method="POST"
      >

<Title className="mailmeTitle">Get in touch? </Title>

         <label><Title>Your Email:</Title></label>
        <input type="email" name="email" />
        <label><Title>Your Name:</Title></label>
        <input type="text" name="name" />
        <div className="form-group">
        <label className="col-md-3 control-label" htmlFor="message"><Title>Your message:</Title></label>
        <div className="col-md-9">
          <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows={5} defaultValue={""} />
        </div>
      </div>
        {status === "SUCCESS" ? <Title><p>Thanks!</p></Title> : <Button style={{margin: '2em'}}>Submit</Button>}
        {status === "ERROR" && <Title><p>Ooops! There was an error.</p></Title>}
      
      </form>
      </div>

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
 