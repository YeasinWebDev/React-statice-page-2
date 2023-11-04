import data from "./data.js"
import Nav from "./nav.js";
import Main from "./main.js";

export default function App() {
  const cards = data.map(items =>{
    return(
      <Main
      key = {items.id}
      title={items.title}
      location={items.location}
      googleMapsUrl={items.googleMapsUrl}
      startDate={items.startDate}
      endDate={items.endDate}
      discription={items.discription}
      img={items.imgUrl}
      />
    )
  })
            


  return(
    <div>
      <Nav />
      {cards}
    </div>
  )
}


