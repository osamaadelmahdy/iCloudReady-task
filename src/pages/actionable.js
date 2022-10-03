import { Row } from "antd"
import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

function actionable() {
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
            Create Dashboards
          </h2>
        </Row>
      </Layout>
    </div>
  )
}

export default actionable
