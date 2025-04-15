import { Article, ArticleResponse, Author, Launch, Event } from "./types"
import { Col, Container, Row } from "react-bootstrap"
interface SingleArticleProps {
  Article: Article
}

const SingleArticle = function (props: SingleArticleProps) {
  return (
    <Container>
      <Row className="  bg-body-secondary mt-4 ">
        <Col sm="3" md="2">
          <img
            src={props.Article.image_url}
            alt="img-article"
            className=" w-100 img-fluid p-2"
          />
        </Col>
        <Col md="10">
          <Row>
            <Col sm="12">
              <h4 className="mt-3">{props.Article.title}</h4>
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
