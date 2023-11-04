import './index.css'
export default function Main(props){
    return(
    <div id="box">
        <section className="Card">
        <div><img id="img" src={props.img} alt={props.title}/></div>
        <div id="text">
            <div id="header"><i class="fa-solid fa-location-dot loc-icons" ></i> <span>{props.location}</span> 
            <button>View on Google Maps</button></div>
            <div id="title">{props.title}</div>
            <div id="date">{props.startDate} - {props.endDate}</div>
            <div id="discription">{props.discription}</div>
        </div>
    
        </section>
       </div>
       )
   
}