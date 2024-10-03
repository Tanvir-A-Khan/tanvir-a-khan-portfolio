import React from 'react';

interface ProgressBarProps {
  length: number;  // Length of the progress bar in pixels
  percent: number; // Progress percentage (0 - 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ length, percent }) => {
  // Ensure the percent is between 0 and 100
  const progress = Math.max(0, Math.min(percent, 100));

  return (
    <div
      style={{
        width: `${length}px`,
        height: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#4caf50', // Green color for progress
          transition: 'width 0.3s ease',
          borderRadius: 'inherit',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
