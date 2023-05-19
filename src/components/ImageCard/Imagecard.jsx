import "./Imagecard.css"

const Imagecard = () => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIoHA37ZrsRZMr7WdUT7YpI3LdJZQOlyoWEhDfISCi&s" // Replace with the actual image URL
        alt="Beautiful Landscape"
        className="card-image"
      />
    </div>
  )
}

export default Imagecard