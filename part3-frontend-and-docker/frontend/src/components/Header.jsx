
function Header() {
  return (
      <div style={{
          position: 'fixed',
          width: '100%',
          left: '0px',

          color: "#fff",
          backgroundColor: "#004267",
          padding: "10px",
          height: "60px",
          border: "0px",
          maxHeight: "60px",
          boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.25)",
          top: 0,
          zIndex: 2
      }}>
          <div style={{
              width: "fit-content", display: "flex", alignItems: "center",
          }}>

              <div style={{
                  fontSize: "28px",
                  marginLeft: "50px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "8px",
                  color: "white"
              }}>
                  Football Players Market Value Prediction
              </div>
          </div>
      </div>
  );
}

export default Header;