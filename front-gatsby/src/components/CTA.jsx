import React from 'react';
import { Link, navigate } from 'gatsby';

const doNavigate = (target) => {
  if (!target || !target.length) {
    return;
  }
  const internal = /^\/(?!\/)/.test(target);
  if (internal) {
    navigate(target);
  } else {
    window.location = target;
  }
};

export default function CTA({ cta, className, handleClick }) {
  let link = cta.route || cta.link || '#';
  if (
    cta.landingPageRoute &&
    cta.landingPageRoute.slug &&
    cta.landingPageRoute.slug.current
  ) {
    link = `/${cta.landingPageRoute.slug.current}`;
  }

  if (cta.kind === 'button') {
    return (
      <button
        id='navAction'
        onClick={() => doNavigate(link)}
        className={className || ''}
      >
        {cta.title}
      </button>
    );
  }

  // External
  if (cta.link) {
    return (
      <a
        href={cta.route}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
      >
        {cta.title}
      </a>
    );
  }
  return (
    <Link to={link} className={className} onClick={handleClick}>
      {cta.title}
    </Link>
  );
}
