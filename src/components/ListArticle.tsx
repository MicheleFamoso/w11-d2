import { useEffect, useState } from "react"
import { Article } from "./types"

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
