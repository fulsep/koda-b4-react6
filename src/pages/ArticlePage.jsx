import React from 'react'
import Navbar from '../components/Navbar'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { articleFetch } from '../utils/data'
import { Helmet } from 'react-helmet'

function ArticlePage() {
  const {username, slug} = useParams()
  const navigate = useNavigate()
  const [data, setData] = React.useState({})
  const getData = async()=>{
    const article = await articleFetch(username.slice(1),slug)
    if(article.length){
      setData(article[0])
    }else{
      navigate("/404")
    }
  }
  React.useEffect(()=>{
    getData()
  },[])
  const {
    title="", image=null,
    author="", date="", body=""
  } = data
  return (
    <>
      <Helmet>
        <title>{title} | Medium</title>
      </Helmet>
      <Navbar />
      <main className='max-w-5xl w-full md:mx-auto mx-5'>
        <article className='my-20 flex flex-col gap-10'>
          <h2 className='font-bold text-5xl'>{title}</h2>
          <div className='flex items-center gap-5'>
            <div className='w-12 aspect-square rounded-full bg-black' />
            <div>{author}</div>
            <div>
              <button type='button' className='bg-white border border-black px-5 py-2 rounded-full'>Follow</button>
            </div>
            <div className='text-gray-600'>4 min read</div>
            <div className='text-gray-600'>{date}</div>
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