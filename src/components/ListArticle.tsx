import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Article, ArticleResponse, Author, Launch, Event } from "./types"
import { data } from "react-router-dom"
import SingleArticle from "./SingleArticle"

const ListArticle = function () {
  const [Articles, setArticles] = useState<Article[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const getArticle = () => {
    const art = "https://api.spaceflightnewsapi.net/v4/articles/"
    fetch(art)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nel recupero dall'api")
        }
      })
      .then((Art) => {
        console.log("articoli", Art)
        setArticles(Art.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <>
      {Articles &&
        Articles.map((a) => <SingleArticle key={a.id} Article={a} />)}
    </>
  )
}

export default ListArticle
