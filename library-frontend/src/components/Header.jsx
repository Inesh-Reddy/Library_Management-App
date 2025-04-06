import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#2C3E50",
    color: "white",
    borderRadius: "5px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#ecf0f1",
    textDecoration: "none",
    padding: "8px",
    fontSize: "18px",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const separatorStyle = {
    margin: "0 10px",
    color: "#ecf0f1",
    fontSize: "18px",
  };

  const linkHoverStyle = {
    color: "#3498db",
    transform: "scale(1.1)",
  };

  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>Library Management App</h1>
      <div style={{ navContainerStyle, linkHoverStyle }}>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <span style={separatorStyle}>|</span>
        <Link style={linkStyle} to="/add">
          AddBook
        </Link>
        <span style={separatorStyle}>|</span>
        <Link style={linkStyle} to="/edit/1">
          EditBook
        </Link>
      </div>
    </div>
  );
};

export default Header;
