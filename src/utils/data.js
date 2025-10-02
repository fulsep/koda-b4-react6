
/**
 * 
 * @param {string} username 
 * @param {string} slug 
 */
export async function articleFetch(username,slug){
  const res = await fetch("/data/article.json");
  const data = await res.json()
  return data.filter(item=> item.username === username && item.slug === slug)
}