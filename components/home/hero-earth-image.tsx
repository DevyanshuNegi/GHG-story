import * as React from "react";

const HeroImage = () => (
  <svg
    width={1021}
    height={650}
    viewBox="0 0 1021 650"
    className="w-full"
    style={{
      height: "auto",
    }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
  
        to {
          transform: rotate(360deg);
        }
      }
  
      @keyframes translate {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }
      `}
    </style>
    <g>
      {/* Earth */}
      <circle cx="510.5" cy="325" r="150" fill="#4CAF50" />
      <circle cx="510.5" cy="325" r="140" fill="#3E8E41" />
      <circle cx="510.5" cy="325" r="130" fill="#2E7D32" />
      <circle cx="510.5" cy="325" r="120" fill="#1B5E20" />
      {/* Atmosphere */}
      <circle cx="510.5" cy="325" r="160" fill="rgba(255, 255, 255, 0.2)" />
      <circle cx="510.5" cy="325" r="170" fill="rgba(255, 255, 255, 0.1)" />
      {/* Greenhouse Gases */}
      <g className="animate-spin" style={{ animation: "spin 20s linear infinite" }}>
        <circle cx="510.5" cy="155" r="20" fill="#FF5722" />
        <circle cx="670.5" cy="325" r="20" fill="#FF5722" />
        <circle cx="510.5" cy="495" r="20" fill="#FF5722" />
        <circle cx="350.5" cy="325" r="20" fill="#FF5722" />
      </g>
      {/* Awareness Text */}
      <text x="510.5" y="600" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="bold">
        Raise Awareness on Greenhouse Gases
      </text>
    </g>
  </svg>
);

export default HeroImage;