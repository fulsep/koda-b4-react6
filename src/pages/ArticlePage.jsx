import React from 'react'
import Navbar from '../components/Navbar'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { articleFetch } from '../utils/data'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { readingTime } from 'reading-time-estimator'

function ArticlePage() {
  const { username, slug } = useParams()
  const navigate = useNavigate()
  const [data, setData] = React.useState({})
  const getData = async () => {
    const article = await articleFetch(username.slice(1), slug)
    if (article.length) {
      setData(article[0])
    } else {
      navigate("/404")
    }
  }
  React.useEffect(() => {
    getData()
  }, [])
  const {
    title = "", image = null,
    author = "", date = "", body = ""
  } = data
  return (
    <>
      <Helmet>
        <title>{title} | Medium</title>
      </Helmet>
      <Navbar />
      <main className='max-w-5xl w-full flex justify-center'>
        <article className='my-20 px-5 flex flex-col gap-10'>
          <h2 className='font-bold md:text-5xl text-3xl'>{title}</h2>
          <div className='flex flex-col md:flex-row md:items-center gap-5'>
            <div className='flex gap-5'>
              <div className='flex gap-5 items-center'>
                <div>
                  <div className='w-12 aspect-square rounded-full bg-black' />
                </div>
                <div>{author}</div>
              </div>
              <div>
                <button type='button' className='bg-white border border-black px-5 py-2 rounded-full'>Follow</button>
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-5'>
              <div className='text-gray-600'>{readingTime(body, 250).text}</div>
              <div className='text-gray-600'>{moment(date).format("MMM DD, YYYY")}</div>
            </div>
          </div>
          <div>
            <img className='w-full' src={image} alt="banner" />
          </div>
          <div className='article-body'>
            <Markdown>
              {body}
            </Markdown>
          </div>
        </article>
      </main>
    </>
  )
}

export default ArticlePage