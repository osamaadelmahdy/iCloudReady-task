import { Row } from "antd"
import React from "react"
import Layout from "../components/Layout"

function operations() {
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
            Tenant/lessee Managment
          </h2>
        </Row>
      </Layout>
    </div>
  )
}

export default operations
