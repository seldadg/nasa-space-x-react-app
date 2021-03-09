
export const RocketInfo = ({rocket}) => (
    <>
    <div className="row rocket-info">
        <div className="col-sm-4">
            <h5>Height</h5>
            <p>{rocket.height.meters} Meters</p>
        </div>
        <div className="col-sm-4">
            <h5>Diameter</h5>
            <p>{rocket.diameter.meters} Meters</p>
        </div>
        <div className="col-sm-4">
            <h5>Mass</h5>
            <p>{rocket.mass.kg/1000} Tonne</p>
        </div>
        <div className="col-sm-4">
            <h5>First Flight</h5>
            <p>{rocket.first_flight}</p>
        </div>
        <div className="col-sm-4">
            <h5>Active</h5>
            <p>{rocket.active ? `Yes` : `No`}</p>
        </div>
        <div className="col-sm-4">
            <h5>Cost/Launch</h5>
            <p>{rocket.cost_per_launch/1000000} Milion</p>
        </div>
    </div>
    <p className="rocket-description">{rocket.description}</p>
    <div className="col-sm-6 m-auto">
    <a href={rocket.wikipedia} className="btn btn-primary btn-block mb-3" target="_blank" rel="noreferrer">Learn more on Wikipedia</a>
    </div>
    </>
);
