import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

function Headline() {
  const [data, setData] = React.useState({})
  const getData = async()=>{
    const res = await fetch("/data/article.json");
    const [data] = await res.json()
    setData(data)
  }
  React.useEffect(()=>{
    getData()
  },[])
  const {
    title="", image=null, synopsis="",
    author="", date="", slug="", username=""
  } = data
  return (
    <div className='flex flex-col md:flex-row my-20 w-full gap-5'>
      <div className='flex justify-center md:justify-end items-center flex-1'>
        <img className='max-w-xl w-full aspect-video' src={image} alt="article" />
      </div>
      <div className='flex justify-center items-start flex-col flex-1'>
        <div className='max-w-xl w-full aspect-video flex flex-col gap-3'>
          <Link to={`/@${username}/${slug}`}>
            <h2 className='font-bold text-3xl'>{title}</h2>
          </Link>
          <p>{synopsis}…</p>
          <span className='text-sm text-gray-500'>{author} &middot; {date} &middot; 4 min read</span>
        </div>
      </div>
    </div>
  )
}

function GridItem({title, synopsis, body, author, date, image, username, slug}) {
  return (
    <div className='max-w-xl w-full aspect-video flex flex-col gap-3'>
      <div>
        <img src={image} alt="article" />
      </div>
      <div className='max-w-xl w-full aspect-video flex flex-col gap-3'>
        <Link to={`/@${username}/${slug}`}>
          <h2 className='font-bold text-3xl'>{title}</h2>
        </Link>
        <p><Markdown>{synopsis || String(body).slice(0,100).trim()}</Markdown>…</p>
        <span className='text-sm text-gray-500'>{author} &middot; {date} &middot; 4 min read</span>
      </div>
    </div>
  )
}

function HomePage() {
  const [data, setData] = React.useState([])

  const getData = async ()=>{
    const res = await fetch("/data/article.json")
    const data = await res.json()
    setData(data)
  }

  React.useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Navbar />
      <main className='flex flex-col my-10 mx-5'>
        <Headline />
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl w-full gap-5 mx-auto'>
          {data.map(article=><GridItem key={article.slug} {...article} />)}
        </div>
      </main>
    </>
  )
}

export default HomePage