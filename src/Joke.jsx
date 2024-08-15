import './Joke.css'

function Joke({ id, joke, votes, vote }) {
    return (
        <div className="Joke">
            <div className="Joke-votearea">
                <button onClick={() => vote(id, +1)}>
                    <i className="fas fa-thumbs-up" />
                </button>

                <button onClick={() => vote(id, -1)}>
                    <i className="fas fa-thumbs-down" />
                </button>
                {votes}
            </div>

            <div className="Joke-text">{joke}</div>
        </div>
    );
}

export default Joke;
