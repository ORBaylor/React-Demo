import "./styles.css"

export default function APP() {

  //To use a class in react you have to name it className
  return (
    <>
    <form className="new-item-form">
    {/* A fragment is an element that has no tags.
    It is used to return multiple elements  */}
    
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  </>
  )
}