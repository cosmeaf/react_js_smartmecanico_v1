// src/components/banner/Banner.tsx
import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerType } from './BannerType';
import { FaInfoCircle, FaExclamationTriangle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import './Banner.css';


const typeColors = {
  info: '#17a2b8',
  warning: '#ffc107',
  error: '#dc3545',
  success: '#28a745',
};

const typeIcons = {
  info: <FaInfoCircle size={30} />,
  warning: <FaExclamationTriangle size={30} />,
  error: <FaTimesCircle size={30} />,
  success: <FaCheckCircle size={30} />,
};

const Banner: React.FC<BannerType> = ({ type = 'info', message = '', to = '' }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleButtonClick = () => {
    setShowModal(false);
    if (to !== '') {
      navigate(to);
      window.location.reload();
    }
  }

  if (!showModal) return null;

  return (
    <div className="Banner" style={{ borderColor: typeColors[type], boxShadow: `0 0 10px ${typeColors[type]}` }}>
      <div className="Banner-icon" style={{ color: typeColors[type] }}>
        {typeIcons[type]}
      </div>
      <div className="Banner-message" style={{ color: typeColors[type] }}>
        {message}
      </div>
      <button className="Banner-button btn-block" style={{ backgroundColor: typeColors[type] }} onClick={handleButtonClick}>
        OK
      </button>
    </div>
  );
};

export default Banner;
