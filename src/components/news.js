import {useEffect, useState} from 'react'
const News = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://free-news.p.rapidapi.com/v1/search?q=bitcoin%2C%20ethereum&lang=en&page=1", {
	  "method": "GET",
	  "headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "fc6f5f41bfmshb50a75999c65417p13ac81jsn45483f53f901"
	}
  })
  .then(response => response.json())
  .then((data) => setData(data.articles))
  .catch(err => {
	  console.error(err);
  });
  }, [])

  return (
    <div className='news'>
      {/* if there is data map each obj */}
      {data && data.slice(0, 3).map((art) => (
        <div key={art.id} className='news-box'>
          {/* changes our template depending on index of object.  */}
          {(data.indexOf(art) % 2 == 0) ? <>
            <div className="news-text-box">
              <div>
                <h3>{art.title}</h3>
                <pre>{art.author}</pre><pre>{art.published_date}</pre>
              </div>
              <p>{art.summary.substring(0, 245)}</p>
              <span><a href={art.link} target="_blank"><button>Read more</button></a></span>
            </div>
            <img src={art.media} alt="" className='news-img' />
            </>:<>
            <img src={art.media} alt="" className='news-img' />
            <div className="news-text-box">
              <div>
                <h3>{art.title}</h3>
                <pre>{art.author}</pre><pre>{art.published_date}</pre>
              </div>
              <p>{art.summary.substring(0, 245)}</p>
              <span><a href={art.link} target="_blank"><button>Read more</button></a></span>
            </div>
            </>}
        </div>
      ))}
    </div>
  );
};

export default News;
