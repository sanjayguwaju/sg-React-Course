import "./Homepage.css"
import Imagecard from "../ImageCard/Imagecard"
import Button from '@mui/material/Button';
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
    <Button variant="contained" sx={{
    borderRadius: 50,

    }}>
      Up
    </Button>
    <Button variant="contained">
      Down
    </Button>
  </div>
  )
}

export default Homepage
