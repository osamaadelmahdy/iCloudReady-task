import { Alert, Button, Drawer } from "antd"
import React, { useContext } from "react"
import { DrawerCtx } from "../context/drawerCtx"

function DrawerComponent() {
  const DrawerContext = useContext(DrawerCtx)
  return (
    <>
      <Drawer
        title="Your Run Cart"
        placement="right"
        onClose={() => DrawerContext.setOpenCart(false)}
        open={DrawerContext.openCart}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="./cart2.png" />
          <p>Your run cart is empty!</p>
          <p>start add your requests here</p>
        </div>
      </Drawer>
      {/* Kitchen Drawer */}
      <Drawer
        title="Your Run Kitchen"
        placement="right"
        onClose={() => DrawerContext.setOpenKitchen(false)}
        open={DrawerContext.openKitchen}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button type="primary" size="large" shape="round">
            Refresh Status
          </Button>
          <br />
          <Button size="large" shape="round">
            Back to Run Information
          </Button>
          <Alert
            message="Your have made a great chooseLet's Run and be ready for a surprise"
            type="warning"
          />
        </div>
      </Drawer>
    </>
  )
}

export default DrawerComponent
