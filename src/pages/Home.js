
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
        <div>
          {/* <TitlebarImageList isCom={true} isMy={true} /> */}
        </div>
      </article>
    </div>
  )
}
export default Home