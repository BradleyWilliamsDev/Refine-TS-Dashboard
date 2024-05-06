import { Col, Row } from "antd"

export const Home = () => {
  return (
    <div>
      <Row>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{height: '460px'}}
        >
          <CalenderUpComingEvents></CalenderUpComingEvents>
        </Col>
      </Row>
    </div>
  )
}