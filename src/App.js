import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardSection } from "./components/CardSections";
import axios from "axios"; // Import axios here
import { Header } from "./components/Header";
import { ChartSection } from "./components/ChartSection";

function App() {
  const [id, setId] = useState("bitcoin");
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/" + id
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (event) => {
    const newId = event.target.value;
    console.log(newId);
    setId(newId);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <div className="App">
      <Header handle_Submit={handleSubmit} />
      <CardSection
        coinName={data.name}
        currentPrice={data?.market_data?.current_price?.usd || ""}
        markCap24={data?.market_data?.market_cap_change_percentage_24h || ""}
        ath={data?.market_data?.ath?.usd || ""}
        atl={data?.market_data?.atl?.usd || ""}
        sentiment={data?.sentiment_votes_up_percentage || ""}
        high24={data?.market_data?.high_24h?.usd || ""}
        low24={data?.market_data?.low_24h?.usd || ""}
      />
      
       {data && data.market_data ? ( // Check if data and market_data are available
        <ChartSection
          Id={data.id}
          priceChange24={data.market_data.price_change_24h_in_currency.usd}
          MarketCap={data.market_data.market_cap.usd}
          TotVol={data.market_data.total_volume.usd}
          Circulating={data.market_data.circulating_supply}
          twitterF={data.community_data.twitter_followers}
        />
        
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
