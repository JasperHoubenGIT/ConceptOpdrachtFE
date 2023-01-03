import './Home.css'
import axios from "axios";
import React, {useEffect, useState} from "react";


function Home() {
    const [redditPosts, setRedditPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/hot.json?limit=15`)
                console.log(response.data.data.children)
                setRedditPosts(response.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <main>
                <div className="also-header">
                    <img
                        src={require('../../assets/logo.png')}
                        alt="logo aapje"
                    />
                    <h1>Reddit</h1>

                </div>
                <section className="outer-boxing">
                    <div className="inner-boxingr">
                        <h2>Hottest Posts</h2>
                        <p><strong>on reddit right now</strong></p>
                        <div className="main-reddit-div">
                            {redditPosts.map((redditPosts) => {
                                return (
                                    <article className="reddit-posts" key={redditPosts.data.id}>
                                        <a href={redditPosts.data.url} className="title-link" target="_blank"
                                           rel="noopener noreferrer">
                                            <h3>
                                                {redditPosts.data.title.length > 100 ? `${redditPosts.data.title.substring(100)}` : redditPosts.data.title}
                                            </h3>
                                        </a>
                                        <div className="lower-post">
                                            <a className="article-link"
                                               href={`/subreddit/${redditPosts.data.subreddit_name_prefixed}`}> {redditPosts.data.subreddit_name_prefixed} </a>

                                            <p> Comments: {redditPosts.data.num_comments} -
                                                Ups: {redditPosts.data.ups} </p>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>


        </>
    )

}

export default Home