import '../App.css'
import { NaviBar } from '../components/NaviBar'
import RecipeReviewCard from '../components/CommodityCard'
function CommodityDetail () {

  return (
    <div>
      <header >
        <NaviBar></NaviBar>
      </header>
      <article >
        <div className='flexbox-centering'>
          <RecipeReviewCard></RecipeReviewCard>
        </div>

      </article>
    </div>
  )
}
export default CommodityDetail