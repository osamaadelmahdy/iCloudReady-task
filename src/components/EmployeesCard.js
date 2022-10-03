import React from "react"
import { Button, Col, Row, Typography } from "antd"
import { Link } from "gatsby"

export default function EmployeesCard() {
  return (
    <Link to="/employees">
      <Row
        style={{
          border: "2px solid white",
          borderRadius: "10px",
        }}
      >
        <Col
          style={{
            borderRadius: "10px",
            width: "262px",
            border: "1px solid #E7E7E7",
            backgroundColor: "white",
          }}
        >
          <Row justify="center" align="middle">
            <img
              src="./Employees.png"
              style={{
                margin: "28px 68px",
              }}
            />
          </Row>

          <Col
            style={{
              backgroundColor: "#950000",

              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontWeight: 300,
                fontSize: 20,
              }}
            >
              Employees Productivity
            </h3>
            <h3 style={{ color: "#fff", fontWeight: 300, fontSize: 14 }}>
              KPI Builder , Work Conf,Create Oracle
            </h3>
            <Row
              justify="space-between"
              align="middle"
              style={{ marginTop: "20px", overflow: "hidden" }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 300,
                  fontSize: 20,
                  margin: 0,
                }}
              >
                100 DTSU*
              </h3>
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.24)",
                  borderRadius: "50%",
                  width: "41px",
                  height: "41px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="./open_in_new.png" />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.24)",
                  borderRadius: "50%",
                  width: "41px",
                  height: "41px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="./e-add.png" />
              </div>
            </Row>
          </Col>
        </Col>
      </Row>
    </Link>
  )
}
