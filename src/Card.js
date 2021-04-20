import {Link} from  "react-router-dom"

function Card(props){
    let showcakedetails=()=>{
        props.showdetails(props.cakedata)
    }
    return (
        <>
            <div className="card" style={{"width": "20.4rem"}}>
            <Link to = {'/cake/'+props.cakedata.cakeid}><img src={props.cakedata.image} style={{"height": "200px"}} className="card-img-top" alt="..."/></Link>
            <div onClick={showcakedetails} className="card-body">
            <h5 className="card-title">{props.cakedata.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a  href="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    );
}

export default Card