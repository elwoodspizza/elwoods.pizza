import React, { PureComponent } from "react";

import Hello from "../components/hello";

class Page extends PureComponent {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    script.onload = () => {
      window.hbspt.forms.create({
        portalId: "4538034",
        formId: "c7c826ed-f3b6-4626-817a-66e2b6b88b49",
        target: "#contact-form",
        css: `
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
          body {
            font-family: "Open Sans"
          }
          .field {
            margin-bottom: 1.5rem;
          }
          label {
            display: block;
            font-weight: 300;
            margin-bottom: .5rem;
          }
          .hs-input {
            border: solid 1px #eee;
            padding: .5rem .75rem;
            width: 100%;
            border-radius: .15rem;
          }
          .hs-button {
            border: none;
            padding: .65rem 1.5rem;
            background: #ca4943;
            color: #fff;
            margin-bottom: 38px;
            border-radius: .3rem;
            font-size: 1rem;
          }
        `
      });
    };
    document.body.appendChild(script);
  }

  render() {
    return <Hello />;
  }
}

export default Page;
