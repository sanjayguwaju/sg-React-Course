import "./Homepage.css"
import Imagecard from "./Imagecard"
const Homepage = () => {
  return (
    <div className="card">
        <div className="card-content">
        <h2 className="quote">
            "Believe you can and you're halfway there."
        </h2>
        <p className="author">- Theodore Roosevelt</p>
        </div>
    <Imagecard/>
  </div>
  )
}

export default Homepage
