import React from 'react';
import notFound from '../images/notFound.svg';

function NotFound() {
  return (
    <div className="not-found">
      <img src={notFound} width="80%" alt="" />
    </div>
  );
}

export default NotFound;
