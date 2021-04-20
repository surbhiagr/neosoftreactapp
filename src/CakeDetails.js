
import {useParams} from "react-router-dom"
function CakeDetails(props) {
    let params = useParams()
    console.log("params are ", params)
    console.log("cake id ", params.cakeid)
    console.log(props)
    return(
            <div>
                <div className="card mb-3" style={{"max-width": "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.cdata.image} alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.cdata.name}</h5>
                                <p className="card-text">{props.cdata.price}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

export default CakeDetails;
