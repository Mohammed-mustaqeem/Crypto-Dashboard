import { useState, useRef, useEffect } from "react";
import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export const ChartSection = (props) => {
  const [options, setOptions] = useState({
    Price: {
      options: {
        chart: {
          id: "area-datetime",
        },
        grid: {
          show: false,
        },
        title: {
          text: "Market Price (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fcdf03",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#fcdf03"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
        selection: 365,
      },
      series: [
        {
          name: "Market Price",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Market_Cap: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Cap (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ff69f5",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#ff69f5"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Cap (USD)",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Tot_Vol: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Volume",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#00ffea",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#00ffea"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Volume",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
  });
  const prevId = useRef(props.Id);
  const prevSelection = useRef(options.Price.options.selection);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.Id}/market_chart?vs_currency=usd&days=${options.Price.options.selection}`);
      const jsonChartData = response.data;

      setOptions((prevOptions) => ({
        ...prevOptions,
        Price: {
          options: prevOptions.Price.options,
          series: [{ name: "Market Price", data: jsonChartData.prices }],
        },
        Market_Cap: {
          options: prevOptions.Market_Cap.options,
          series: [{ name: "Market Price", data: jsonChartData.market_caps }],
        },
        Tot_Vol: {
          options: prevOptions.Tot_Vol.options,
          series: [{ name: "Market Price", data: jsonChartData.total_volumes }],
        },
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 1000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (prevId.current !== props.Id) {
      prevId.current = props.Id;
      fetchData();
    }
    if (prevSelection.current !== options.Price.options.selection) {
      prevSelection.current = options.Price.options.selection;
      fetchData();
    }
  }, [props.Id, options.Price.options.selection]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col" style={{ maxWidth: "610px" }}>
            <div id="chart">
              <div className="toolbar">

                <button
                  id="one_month"
                  onClick={() =>
                    setOptions((prevOptions) => ({
                      ...prevOptions,
                      Price: {
                        ...prevOptions.Price,
                        options: { ...prevOptions.Price.options, selection: 1 },
                      },
                    }))
                  }
                >
                  1D
                </button>
                &nbsp;
                
                <button
                  id="six_months"
                  onClick={() =>
                    setOptions((prevOptions) => ({
                      ...prevOptions,
                      Price: {
                        ...prevOptions.Price,
                        options: { ...prevOptions.Price.options, selection: 7 },
                      },
                    }))
                  }
                >
                  1W
                </button>
                &nbsp;
             
                <button
                  id="one_year"
                  onClick={() =>
                    setOptions((prevOptions) => ({
                      ...prevOptions,
                      Price: {
                        ...prevOptions.Price,
                        options: {
                          ...prevOptions.Price.options,
                          selection: 30,
                        },
                      },
                    }))
                  }
                >
                  1M
                </button>
                &nbsp;
               
                <button
                  id="ytd"
                  onClick={() =>
                    setOptions((prevOptions) => ({
                      ...prevOptions,
                      Price: {
                        ...prevOptions.Price,
                        options: {
                          ...prevOptions.Price.options,
                          selection: 182,
                        },
                      },
                    }))
                  }
                >
                  6M
                </button>
                &nbsp;
               
                <button
                  id="all"
                  onClick={() =>
                    setOptions((prevOptions) => ({
                      ...prevOptions,
                      Price: {
                        ...prevOptions.Price,
                        options: {
                          ...prevOptions.Price.options,
                          selection: 365,
                        },
                      },
                    }))
                  }
                >
                  1Y
                </button>
              </div>
              <Chart
                options={options.Price.options}
                series={options.Price.series}
                type="area"
                height="400"
                width="600"
              />
            </div>
          </div>
          <div className="col" style={{ maxWidth: "200px" }}>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md", color:"white" }}
              >
                {" "}
                Market Cap{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                $ {props.MarketCap}
              </p>
            </div>
                <br/>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md",  color:"white"  }}
              >
                {" "}
                Price Change 24hrs{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",}}>
                $ {props.priceChange24}
              </p>
            </div>
            <br/>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md",  color:"white"  }}
              >
                {" "}
                Total Volume{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                $ {props.TotVol}
              </p>
            </div>
            <br/>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md",  color:"white"  }}
              >
                {" "}
                Circulating Supply
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                {props.Circulating}
              </p>
            </div>
            <br/>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md",  color:"white"  }}
              >
                {" "}
                Twitter Followers
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                {props.twitterF}
              </p>
            </div>
            <br/>
          </div>
          <div className="col" style={{ maxWidth: "310px" }}>
            <div>
              <Chart
                options={options.Market_Cap.options}
                series={options.Market_Cap.series}
                type="line"
                height="200"
                width="300"
              />
            </div>
            <div>
              <Chart
                options={options.Tot_Vol.options}
                series={options.Tot_Vol.series}
                type="line"
                height="200"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
