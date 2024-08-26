import "./FilterSlider.css"
export default function FilterSlider() {
  return (
    <div className="filter-slider">
      <h3 className="filter-slider-title">Filters</h3>
      <p className="filter-slider-description">Spending</p>
      <div className="filter-slider-container">
        <input type="range" min="1" max="100" value="50"></input>
      </div>
      <div className="filter-slider-range">
        <p className="filter-slider-range-paragraph">$63950</p>
        <p className="filter-slider-range-paragraph">$26191</p>
      </div>
    </div>
  )
}
