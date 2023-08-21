import BottomNavLink from './BottomNavLink';

export default function BottomNav() {
  const divStyle = {
    width: '100%',
    height: '10em', // Adjust the height of the footer as needed
    background: 'linear-gradient(to right, #00C2B5, #003E72 90%)'
  };

  const footerStyle = {
    width: '100%'
  };

  return (
    <footer style={footerStyle}>
      <div style={divStyle}>
        <BottomNavLink />
      </div>
    </footer>
  );
};
