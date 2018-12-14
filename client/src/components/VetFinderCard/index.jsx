import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Container,
  Row,
  Col,
  CardLink
} from "reactstrap";
import "./style.css";
import "animate.min.css"

const VetFinderCard = props => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              />
              <CardImgOverlay>
                <CardTitle className= "card-title">Cornerstone Animal Hospital</CardTitle>
                <CardText>
                  Dr. Daniel Burke 
                </CardText>
                <CardText>
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </CardText>
                <CardLink href="#">1663 E Ray Rd #105, Gilbert, AZ 85296</CardLink>
                <CardLink href="#">480-857-9229</CardLink>
              </CardImgOverlay>
            </Card>
          </div>
        </Col>

        <Col>
          <div>
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </Col>

        <Col>
          <div>
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VetFinderCard;
