import { useEffect, useState } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";

const JokeList = ({ numJokesToGet = 5 }) => {
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(jokes, isLoading);

    const getJokes = async () => {
        const url = "https://icanhazdadjoke.com";
        const headers = {
            headers: { Accept: "application/json" },
        };
        let jokes = [];
        const seenJokes = new Set();

        try {
            while (jokes.length < numJokesToGet) {
                let res = await axios.get(url, headers);
                const joke = res.data;
                if (!seenJokes.has(joke.id)) {
                    seenJokes.add(joke.id);
                    jokes.push({ ...joke, votes: 0 });
                } else {
                    console.log("duplicate found!");
                }
            }
            setIsLoading(false);
            setJokes(jokes);
        } catch (e) {
            console.err(e);
        }
    };

    useEffect(() => {
        getJokes();
    }, []);

    /* empty joke list, set to loading state, and then call getJokes */

    const generateNewJokes = () => {
        setIsLoading(true);
        getJokes();
    };

    /* change vote for this id by delta (+1 or -1) */

    const vote = (id, delta) => {
        setJokes((jokes) =>
            jokes.map((j) =>
                j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        );
    };

    let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

    return (
        <div className="JokeList">
            <button className="JokeList-getmore" onClick={generateNewJokes}>
                Get Jokes
            </button>
            {isLoading ? (
                <div className="loading">
                    <i className="fas fa-4x fa-spinner fa-spin" />
                </div>
            ) : (
                <ul>
                    {sortedJokes.map((joke) => (
                        <li key={joke.id}>
                            <Joke {...joke} vote={vote} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default JokeList;
