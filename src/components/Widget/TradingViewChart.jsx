import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({symbol}) {
  console.log(symbol)
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": `BINANCE:${symbol}USDT`,
      "interval": "D",
      "timezone": "Asia/Kolkata",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "details": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });
    

    const containerElement = container.current;
    containerElement.innerHTML = ''; // Clear the container before appending the script
    containerElement.appendChild(script);

    return () => {
      containerElement.removeChild(script); // Cleanup function to remove the script
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container border-2 rounded-xl" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);