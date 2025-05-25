import React from "react";

export const Team = (props) => {
  const getIcon = (title) => {
    switch (title) {
      case 'Register Account':
        return '👤';
      case 'Add Funds':
        return '💰';
      case 'Choose Market':
        return '📈';
      case 'Place Bet':
        return '🎲';
      case 'Wait for Results':
        return '⏳';
      case 'Withdraw Winnings':
        return '💸';
      default:
        return '❓';
    }
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>How to Play</h2>
          <p>Follow these simple steps to start playing Matka game</p>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4 col-sm-6">
                  <div className="game-instruction">
                    <div className="icon">
                      <span style={{ fontSize: '48px', color: '#ffffff' }}>{getIcon(d.title)}</span>
                    </div>
                    <h4>{d.title}</h4>
                    <p>{d.description}</p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
