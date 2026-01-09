import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Stencil K Construction */}
      <path d="M10 10H45V35L25 50L45 65V90H10V60L20 50L10 40V10Z" />
      <path d="M55 10H90V40L75 50L90 60V90H55V65L70 50L55 35V10Z" />
    </svg>
  </div>
);