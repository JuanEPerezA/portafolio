import React, { memo } from 'react';

const SocialLinks = memo(({ className = "flex space-x-3" }) => {
  return (
    <section className={className}>
      <a href="https://api.whatsapp.com/send?phone=573117121720" target="_blank" rel="noopener noreferrer" className="alink">
        <span className="socialbtn text-[#377c4d]">
          <i className="fa-brands fa-whatsapp"></i>
        </span>
      </a>
      <a href="mailto:jepa9@hotmail.com" target="_blank" rel="noopener noreferrer" className="alink">
        <span className="socialbtn text-[#6cb8d9]">
          <i className="fa-brands fa-at"></i>
        </span>
      </a>
      <a href="https://github.com/JuanEPerezA" target="_blank" rel="noopener noreferrer">
        <span className="socialbtn text-[#e14a84]">
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/jepa1998/" target="_blank" rel="noopener noreferrer">
        <span className="socialbtn text-[#0072b1]">
          <i className="fa-brands fa-linkedin-in"></i>
        </span>
      </a>
    </section>
  );
});

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
