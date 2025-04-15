import { Article } from "./types"
import { Col, Container, Row } from "react-bootstrap"

interface SingleArticleProps {
  Article: Article
}

const SingleArticle = function (props: SingleArticleProps) {
  return (
    <Container>
      <Row className=" bg-primary-subtle  mt-3 mx-5 rounded-3">
        <Col sm="3" md="2" className=" d-flex align-items-center">
          <div className="">
            <img
              src={props.Article.image_url}
              alt="img-article"
              className=" img-fluid  py-3  "
            />
          </div>
        </Col>
        <Col md="10">
          <Row className="">
            <Col sm="12">
              <h3 className="mt-3 text-truncate ">{props.Article.title}</h3>
            </Col>
            <Col sm="12">
              <p className=" fs-6">{props.Article.summary}</p>
            </Col>
            <Col sm="3">
              <p>Author : {props.Article.authors[0].name}</p>
            </Col>
            <Col sm="3">
              <p>Credit : {props.Article.news_site}</p>
            </Col>
            <Col sm="4">
              <p>Published : {props.Article.published_at.split("T")[0]}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleArticle
