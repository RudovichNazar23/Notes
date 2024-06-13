export default function ProfileInfoGroup({ fieldValue }){
    return (
        <div className="m-1 d-flex flex-row justify-content-between" style={{width: "65%"}}>
            <div className="form-control">{fieldValue}</div>
            <button className="btn btn-primary m-1">Update</button>
        </div>
    );
};