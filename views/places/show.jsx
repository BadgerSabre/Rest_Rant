const React = require('react')
const Def = require('../default')

function Show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h2>Rating</h2>
                    {rating}
                <h2>Description</h2>
                    <h4>
                        {data.place.showEstablished()}
                    </h4>
                        <p>Located in{ data.place.city }, { data.place.state } and serving { data.place.cuisines }</p>
                <h2>Comments</h2>
                {comments}
                <form method='POST' action={`/places/${data.place._id}/comment`}>
                    <label htmlFor='author'>Author</label>
                    <input id='author' name='author' type="text"></input>
                    <label htmlFor='content'>Content</label>
                    <textarea id="content" name="content" type="text"></textarea>
                    <label htmlFor='stars'>Star Rating</label>
                    <input id='stars' name='stars' type='range' min='1' max='5' step='0.5'></input>
                    <label htmlFor='rant'>Rant?</label>
                    <input id='rant' name='rant' type='checkbox'></input>
                    <input type='submit'></input>
                </form>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit Place
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>     
            </main>
        </Def>
    )
}

module.exports = Show