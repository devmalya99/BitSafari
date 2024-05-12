import React, { useEffect, useRef } from 'react';

function TradingViewWidget({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'; // Updated to use Advanced Chart
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": `BINANCE:${symbol}USDT`,
      "interval": "D", // Default interval for the chart
      "timezone": "Etc/UTC", // Set the timezone to UTC
      "theme": "dark", // Theme of the chart
      "style": "1", // Style of the chart
      "locale": "en", // Language of the widget
      "toolbar_bg": "#f1f3f6", // Background color of the toolbar
      "enable_publishing": false, // Disables publishing options
      "allow_symbol_change": true, // Allows users to change the symbol
      "container_id": "tradingview_advanced_chart" // Container ID
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [symbol]); // Re-run the effect if `symbol` changes

  return (
    <div id="tradingview_advanced_chart" className="tradingview-widget-container" ref={containerRef}></div>
  );
}

export default TradingViewWidget;