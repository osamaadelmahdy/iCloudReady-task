import { Row } from "antd"
import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

function employees() {
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
            KPI Builder , Work Conf,Create Oracle Requests
          </h2>
        </Row>
      </Layout>
    </div>
  )
}

export default employees
