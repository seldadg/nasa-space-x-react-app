export const Filter = ({onChange}) => (
    <div className="filter-wrapper">
        <select name="height" className="filetr-height" onChange={onChange}>
            <option value="0">Select Rocket</option>
            <option value="Yes">Active</option>
            {/* <option value="No">Non-Active</option> */}
        </select>
    </div>
)
