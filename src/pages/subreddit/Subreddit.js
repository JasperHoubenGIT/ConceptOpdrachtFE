import React, {useEffect, useState} from 'react';
import './Subreddit.css'
import '../../App.css'
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
                console.log(response.data.data)
                setData(response.data.data)
            } catch (e) {
                console.error(e)
            }
        }

        if (subredditId) {
            fetchData()
        }
    }, [subredditId]);


    return (
        <>
            <div className="subreddit-header">
                <h1>r/{subredditId}</h1>
                <h4>Subreddit specifications</h4>
            </div>

            <main>
                <section>
                    {Object.keys(data).length > 0 && (
                        <div className="subreddit-div">
                            <h3>Title</h3>
                            <p>{data.title}</p>
                            <h3>Description</h3>
                            <p>{data.public_description}</p>
                            <h3>Number of subscribers</h3>
                            <p>{data.subscribers}</p>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}


export default Subreddit;