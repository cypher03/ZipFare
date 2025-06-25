import { useState, useRef } from "react";

const rideTypes = [
  {
    type: "Ola",
    services: [
      { name: "Car", price: 12, icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ola_Cabs_logo.png" },
      { name: "Bike", price: 8, icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ola_Cabs_logo.png" },
      { name: "Auto", price: 6, icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ola_Cabs_logo.png" },
    ],
  },
  {
    type: "Uber",
    services: [
      { name: "Car", price: 15, icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
      { name: "Bike", price: 9, icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
      { name: "Auto", price: 7, icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    ],
  },
  {
    type: "Rapido",
    services: [
      { name: "Car", price: 10, icon: "https://seeklogo.com/images/R/rapido-logo-6B6B6B6B6B-seeklogo.com.png" },
      { name: "Bike", price: 7, icon: "https://seeklogo.com/images/R/rapido-logo-6B6B6B6B6B-seeklogo.com.png" },
      { name: "Auto", price: 5, icon: "https://seeklogo.com/images/R/rapido-logo-6B6B6B6B6B-seeklogo.com.png" },
    ],
  },
  // Add more ride types if needed
];

function fetchAddressSuggestions(query, callback) {
  if (!query) {
    callback([]);
    return;
  }
  fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&apiKey=e80edd60d1774b968a1e2e0c0998564c`
  )
    .then((response) => response.json())
    .then((result) => {
      if (result && result.features) {
        callback(result.features.map(f => f.properties.formatted));
      } else {
        callback([]);
      }
    })
    .catch(() => callback([]));
}

function FareComparison() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showSourceSuggestions, setShowSourceSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const sourceTimeout = useRef();
  const destinationTimeout = useRef();

  // Handlers for source input
  const handleSourceChange = (e) => {
    const value = e.target.value;
    setSource(value);
    setShowSourceSuggestions(true);
    clearTimeout(sourceTimeout.current);
    sourceTimeout.current = setTimeout(() => {
      fetchAddressSuggestions(value, setSourceSuggestions);
    }, 300);
  };
  const handleSourceSelect = (suggestion) => {
    setSource(suggestion);
    setShowSourceSuggestions(false);
  };

  // Handlers for destination input
  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setShowDestinationSuggestions(true);
    clearTimeout(destinationTimeout.current);
    destinationTimeout.current = setTimeout(() => {
      fetchAddressSuggestions(value, setDestinationSuggestions);
    }, 300);
  };
  const handleDestinationSelect = (suggestion) => {
    setDestination(suggestion);
    setShowDestinationSuggestions(false);
  };

  return (
    <div className="fare-comparison-container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "var(--bg-secondary)"
    }}>
      <div style={{
        display: "flex",
        gap: "2.5rem",
        background: "var(--bg-secondary)",
        padding: "2rem",
        borderRadius: "1.5rem"
      }}>
        {/* Left: Calculate Fares */}
        <div className="fare-comparison-card" style={{
          background: "var(--card-bg)",
          borderRadius: "1.2rem",
          padding: "2.5rem 2rem",
          minWidth: 340,
          boxShadow: "0 2px 12px var(--shadow-color)"
        }}>
          <h1 style={{ 
            fontSize: 38, 
            margin: 0, 
            fontWeight: 700, 
            color: "var(--text-primary)", 
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            textAlign: "center"
          }}>Calculate Fares</h1>
          <div style={{ marginTop: 32, fontWeight: 600, fontSize: 24, color: "var(--text-primary)" }}>Source</div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Enter source"
              value={source}
              onChange={handleSourceChange}
              onFocus={() => setShowSourceSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSourceSuggestions(false), 150)}
              style={{
                width: "90%",
                marginTop: 8,
                padding: "0.9rem 1rem",
                fontSize: 20,
                borderRadius: 10,
                border: "1.5px solid var(--border-color)",
                marginBottom: 24,
                background: "var(--input-bg)",
                color: "var(--text-primary)"
              }}
            />
            {showSourceSuggestions && sourceSuggestions.length > 0 && (
              <div className="suggestion-dropdown" style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "90%",
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: 8,
                boxShadow: "0 2px 8px var(--shadow-color)",
                zIndex: 10,
                maxHeight: 180,
                overflowY: "auto"
              }}>
                {sourceSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="suggestion-item"
                    onMouseDown={() => handleSourceSelect(suggestion)}
                    style={{
                      padding: "0.7rem 1rem",
                      cursor: "pointer",
                      borderBottom: idx !== sourceSuggestions.length - 1 ? "1px solid var(--border-color)" : "none",
                      color: "var(--text-primary)"
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ fontWeight: 600, fontSize: 24, color: "var(--text-primary)" }}>Destination</div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={handleDestinationChange}
              onFocus={() => setShowDestinationSuggestions(true)}
              onBlur={() => setTimeout(() => setShowDestinationSuggestions(false), 150)}
              style={{
                width: "90%",
                marginTop: 8,
                padding: "0.9rem 1rem",
                fontSize: 20,
                borderRadius: 10,
                border: "1.5px solid var(--border-color)",
                marginBottom: 32,
                background: "var(--input-bg)",
                color: "var(--text-primary)"
              }}
            />
            {showDestinationSuggestions && destinationSuggestions.length > 0 && (
              <div className="suggestion-dropdown" style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "90%",
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: 8,
                boxShadow: "0 2px 8px var(--shadow-color)",
                zIndex: 10,
                maxHeight: 180,
                overflowY: "auto"
              }}>
                {destinationSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="suggestion-item"
                    onMouseDown={() => handleDestinationSelect(suggestion)}
                    style={{
                      padding: "0.7rem 1rem",
                      cursor: "pointer",
                      borderBottom: idx !== destinationSuggestions.length - 1 ? "1px solid var(--border-color)" : "none",
                      color: "var(--text-primary)"
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            style={{
              width: "100%",
              background: "var(--button-bg)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 26,
              border: "none",
              borderRadius: 12,
              padding: "0.9rem 0",
              cursor: "pointer",
              boxShadow: "0 2px 8px var(--shadow-color)"
            }}
          >
            Compare
          </button>
        </div>
        {/* Right: Price Comparison - Scrollable Ride Types */}
        <div className="fare-comparison-card" style={{
          background: "var(--card-bg)",
          borderRadius: "1.2rem",
          padding: "2.5rem 2rem",
          minWidth: 340,
          boxShadow: "0 2px 12px var(--shadow-color)",
          maxHeight: 500,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 24
        }}>
          <h1 style={{ 
            fontSize: 38, 
            margin: 0, 
            fontWeight: 700, 
            color: "var(--text-primary)", 
            fontFamily: "'Inter', Arial, Helvetica, sans-serif" 
          }}>Price Comparison</h1>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
            {rideTypes.map((ride) => (
              <div key={ride.type} className="ride-type-container" style={{
                background: "var(--bg-secondary)",
                borderRadius: 16,
                padding: "1.2rem 1.2rem 0.7rem 1.2rem",
                marginBottom: 0,
                boxShadow: "0 1px 4px var(--shadow-color)"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 16,
                  color: "var(--text-primary)",
                  gap: 12
                }}>
                  <img
                    src={ride.services[0].icon}
                    alt={ride.type}
                    style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff" }}
                  />
                  <span>{ride.type}</span>
                </div>
                {ride.services.map(service => (
                  <div key={service.name} className="service-item" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "var(--card-bg)",
                    borderRadius: 12,
                    padding: "0.8rem 1.2rem",
                    marginBottom: 12,
                    fontSize: 22,
                    fontWeight: 600,
                    boxShadow: "0 1px 4px var(--shadow-color)",
                    color: "var(--text-primary)"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <img src={service.icon} alt={service.name} style={{ width: 32, height: 32, borderRadius: "50%", background: service.name === "Rapido" ? "#fffbe6" : "#fff" }} />
                      <span>{service.name}</span>
                    </span>
                    <span style={{ fontWeight: 500 }}>${service.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FareComparison; 