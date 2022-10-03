import { Row } from "antd"
import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

function customer() {
  return (
    <div>
      <Layout>
        <Row justify="center" align="middle" style={{ height: "400px" }}>
          <h2
            style={{
              color: "#0097C2",
              fontWeight: 400,
              fontSize: 28,
            }}
          >
            Get your own mobile app for industry specific
          </h2>
        </Row>
      </Layout>
    </div>
  )
}

export default customer
