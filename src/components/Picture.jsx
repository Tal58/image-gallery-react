function Picture(probs){
    const {photographer,large} = probs;
return(
    <div className="card hover p-0" style={{width: "20rem"}}>
        <div className="img">
        <img src={large} className="card-img-top" style={{height: "40vh"}} />
        </div>
     
         <div className= "card-body">
               <h5 className="card-title">{photographer}</h5>
        </div>
    </div>
)
}

export default Picture