import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    const fetchArticles = async () => {
      try {
        
          const res = await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3aGo3Ewiw5pzLu4q8bth01wzot4BQcoT')
          const articles = await res.json()
          console.log(articles.results)
          setArticles(articles.results)

      } catch (error) {
        console.error(error);
      } 
    }
    fetchArticles()

  },[])
  return (
    <>
      <div className="showcase">
        <div className = "overlay px-5">
          <h1 className ="text-4xl font-bold text-white text-center mb-4">NY Times Most Popular Articles</h1>
          {/* form */}
        </div>
      </div>
      <section className="px-5 pt-10 pb-20">
        {articles.map((article) => {
          const {abstract, title, byline, published_date, section, url, id} = article
          return(
            <article key={id} className ="stories">
             
              <h2 className="font-bold text-2xl mb-2">{title}</h2>
           <p>{abstract}</p>
           <ul>
             
              <li>{byline}</li>
              
              
              <li>
                <span className="font-bold">
                  Publish Date : 
                </span>
                {published_date}
              </li>
          
              <li>
              <span className="font-bold">
                  Category :
                </span>
                {section}</li>
           </ul>
           <a href = {url} target="_blank">Read more</a>
            </article>
          )
        })}
      </section>
    </>
    
  );
}

export default App;
