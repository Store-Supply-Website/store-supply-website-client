
import '../App.css'
import TitlebarImageList from '../components/CommodityList'
import { NaviBar } from '../components/NaviBar'
function Home () {
  return (
    <div>
      <header>
        <NaviBar></NaviBar>

      </header>
      <article>
        <div className='flexbox-centering'>
          <TitlebarImageList />
        </div>
      </article>
    </div>
  )
}
export default Home