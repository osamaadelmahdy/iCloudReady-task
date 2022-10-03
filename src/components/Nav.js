import React, { useContext } from "react"
import { Button, Col, Row, Typography } from "antd"
import { DrawerCtx } from "../context/drawerCtx"
function Nav() {
  const DrawerContext = useContext(DrawerCtx)
  return (
    <>
      <Row
        gutter={6}
        justify="space-between"
        style={{ backgroundColor: "#F8F8F8", padding: "20px 50px" }}
        align="middle"
      >
        <Col>
          <Row>
            <h2 style={{ fontWeight: "400", color: "#00244D" }}>
              Welcome to iCloudReady!
            </h2>
          </Row>
          <Row>
            <h3 style={{ fontWeight: "400", fontSize: 15, color: "#637182" }}>
              You have started your 30 day trial
            </h3>
          </Row>
        </Col>

        <Row justify="start" align="middle" gutter={6}>
          <Col>
            <Row>
              <img
                style={{ marginRight: "-20px", width: 41, height: 41 }}
                src="./persons/1.png"
              />
              <img
                style={{ marginRight: "-20px", width: 41, height: 41 }}
                src="./persons/2.png"
              />
              <img
                style={{ marginRight: "-20px", width: 41, height: 41 }}
                src="./persons/3.png"
              />
              <img
                style={{ marginRight: "-20px", width: 41, height: 41 }}
                src="./persons/4.png"
              />
              <div
                style={{
                  backgroundColor: "white",
                  width: "41px",
                  height: "41px",
                  borderRadius: "50%",
                  marginRight: "-20px",
                }}
              ></div>
              <div
                style={{
                  color: "#7C838A",
                  backgroundColor: "#E6E6E6",
                  width: "41px",
                  height: "41px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 17,
                }}
              >
                +3
              </div>
            </Row>
          </Col>
          <Col>
            <h2 style={{ color: "#637182", fontWeight: 300 }}>
              Our architects are here to help
            </h2>
            <h3 style={{ color: "#0097C2", fontWeight: 300 }}>
              Book a free session
            </h3>
          </Col>
        </Row>

        <Row>
          <div
            onClick={() => DrawerContext.setOpenCart(true)}
            style={{
              backgroundColor: "#E1ECF9",
              borderRadius: "50%",
              width: "41px",
              height: "41px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFD900",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "-3px",
                left: "-3px",
              }}
            >
              2
            </div>
            <img src="./cart.png" />
          </div>
          <div
            onClick={() => DrawerContext.setOpenKitchen(true)}
            style={{
              backgroundColor: "#E1ECF9",
              borderRadius: "50%",
              width: "41px",
              height: "41px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFD900",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "-3px",
                left: "-3px",
              }}
            >
              2
            </div>
            <img src="./Kitchen.png" />
          </div>
        </Row>
      </Row>
    </>
  )
}

export default Nav
