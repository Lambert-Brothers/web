import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'rgba(255, 255, 255)',
      color: '#3d559a',
      fontWeight: 'bold',
      fontSize: '1.05em',
      padding: '20px 0',
      textAlign: 'center'
    }}>
      <p>
        &copy; 2026 Lambert Brothers Insurance.{' '}
        <span style={{ display: 'inline' }} className="footer-rights">All rights reserved.</span>
      </p>
      <style>{`
        @media (max-width: 768px) {
          .footer-rights {
            display: block !important;
          }
          footer {
            padding: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;