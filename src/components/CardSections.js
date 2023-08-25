import React from "react";
import { Card } from "react-bootstrap";

export const CardSection = (props) => {
  return (
    <div>
      <div
        className="fs-1 fw-bold m-3 text-Capitalize"
        style={{
          fontFamily: "NHaasGroteskDSPro-65Md",
          marginTop: "3px !important",
          marginBottom: "0px !important",
          color:"white"
        }}
      >
        {props.coinName}
      </div>
      <div className="row m-3 mb-0" style={{ marginTop: " 2px !important" }}>
        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              Market Cap 24Hrs
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "#fcdf03" }}>
              {props.markCap24} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              All Time High
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "#fcdf03" }}>
              {props.ath} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              All Time High
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "#fcdf03" }}>
              {props.atl} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              Positive Sentiments
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "#fcdf03" }}>
              {props.sentiment} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              High 24Hrs
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "lightgreen" }}>
              {props.high24} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}>
              Low 24Hrs
            </Card.Title>
            <Card.Text className="fw-bold fs-5" style={{ color: "red" }}>
              {props.low24} %{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
     
       
          <Card.Text
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%", textAlign: 'center', color:"white"  }}>
            Current Price
          </Card.Text>
          {/* <h1> Current Price</h1> */}
          <Card.Text style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
            {props.currentPrice} %
          </Card.Text>
    </div>
  );
};
