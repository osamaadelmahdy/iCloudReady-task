import { Row, Col, Button } from "antd"
import React, { useState } from "react"
import { DrawerCtx } from "../context/drawerCtx"
import Nav from "./Nav"
import { ShoppingCartOutlined } from "@ant-design/icons"
import DrawerCopmonent from "./DrawerComponent"

function Layout({ children }) {
  const [openCart, setOpenCart] = useState(false)
  const [openKitchen, setOpenKitchen] = useState(false)

  return (
    <>
      <DrawerCtx.Provider
        value={{ setOpenCart, setOpenKitchen, openCart, openKitchen }}
      >
        <DrawerCopmonent />
        <Nav />
        <Col span={24} style={{ backgroundColor: "#F8F8F8" }}>
          {/* card start */}
          <Col
            style={{
              background: "linear-gradient(to top right,#97E0F3, #FFFFFF)",
            }}
          >
            <div style={{ margin: "0 50px", padding: "20px 0" }}>
              <Row justify="space-between" style={{ margin: "0 50px" }}>
                <Row align="middle">
                  <h2
                    style={{
                      color: "#0097C2",
                      fontWeight: 400,
                      fontSize: 28,
                      margin: "0 10px 0 0",
                    }}
                  >
                    Get Support
                  </h2>
                  <img src="./get.png" width={28} height={28} />
                </Row>

                <div
                  style={{
                    backgroundColor: "#0097C2",
                    borderRadius: "50%",
                    width: "41px",
                    height: "41px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="./three-dashs.png" />
                </div>
              </Row>

              {children}
            </div>
          </Col>
        </Col>

        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "white", height: "70px" }}
        >
          <h3 style={{ color: "#637182", fontWeight: 300 }}>
            Got questions? Take a look at our{" "}
            <span style={{ color: "#0097C2" }}>FAQs</span>, talk to us on
            Twitter
            <span style={{ color: "#0097C2" }}>@icloudready</span> or send an
            email to
            <span style={{ color: "#0097C2" }}>team@icloud-ready.com</span>
          </h3>
        </Row>
      </DrawerCtx.Provider>
    </>
  )
}

export default Layout
