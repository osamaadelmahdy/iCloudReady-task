import { Row } from "antd"
import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout"
import ActionableCard from "../components/ActionableCard"
import CustomerCard from "../components/CustomerCard"
import EmployeesCard from "../components/EmployeesCard"
import OperationsCard from "../components/OperationsCard"
export default function Home() {
  return (
    <div>
      <Layout>
        <Row
          style={{ flexFlow: "row ", marginTop: "20px" }}
          justify="space-between"
        >
          <ActionableCard />
          <CustomerCard />
          <EmployeesCard />
          <OperationsCard />
        </Row>
      </Layout>
    </div>
  )
}
