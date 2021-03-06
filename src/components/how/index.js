import React from "react";
import PropTypes from "prop-types";

import EmailIcon from "react-icons/lib/fa/envelope";
import "./style.scss";

const whatWeDo = [
  "React & React Native",
  "PHP",
  "GraphQL",
  "Node.js",
  "iOS (Objective-C & Swift)",
  "Java & Android",
  "System Architecture",
  "Content Management Systems",
  "WordPress Customization",
  "Video Management & Distribution"
];

const How = ({ children, showEmailButton, onEmailClick }) => (
  <section className="c-how">
    <div className="c-how-main">
      <h3>
        How We Work... <small>it's pretty awesome!</small>
      </h3>
      <div className="c-how-info">
        <div>
          <p>
            We bring together development, design, product management &amp; our
            clients to create one integrated team; focused on building amazing
            products.  We have one hourly
            rate for all our resources, to provide our clients maximum
            flexibility and support.
          </p>
        </div>
        <div className="c-how-info-price">
          <strong>
            $200<small>/hour</small>
          </strong>
          time &amp; materials contracts
        </div>
      </div>
    </div>
  </section>
);

How.propTypes = {
  children: PropTypes.node,
  showEmailButton: PropTypes.bool,
  onEmailClick: PropTypes.func
};

How.defaultProps = {
  children: "",
  showEmailButton: true,
  onEmailClick: () => {}
};

export default How;
