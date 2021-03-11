import React from 'react';
import Contact from './Contact';

export default function ContactForms({ kind }) {
  let contactForms = undefined;

  switch (kind) {
    case 'contact':
      contactForms = <Contact />;
      break;
    default:
      contactForms = <></>;
  }

  return contactForms;
}
