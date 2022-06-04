const React = require('react')
const Def = require('../default.jsx')

function EditForm(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place._id}?_method=PUT`}>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" defaultValue={data.place.name} name="name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" defaultValue={data.place.pic} name="pic" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" defaultValue={data.place.city} name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" defaultValue={data.place.state} name="state" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" defaultValue={data.place.cuisines} name="cuisines" required />
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='founded'>Founded</label>
                        <input className='form-control' id="founded" name="founded" value={data.place.founded}> 
                        </input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Edit Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = EditForm