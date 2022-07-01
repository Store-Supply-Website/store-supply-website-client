import '../App.css'
import TitlebarImageList from '../components/CommodityList'
import { NaviBar } from '../components/NaviBar'
import CustomizedInputBase from '../components/SerachBar'
function Commodity () {
  return (
    <div>
      <header>
        <NaviBar></NaviBar>

      </header>
      <article>
        <div className='flexbox-centering'>
          <CustomizedInputBase sx={{ mt: 100 }}></CustomizedInputBase>
        </div>

        <div className='flexbox-centering' >

          <TitlebarImageList isCom={true} isMy={false} />
        </div>

      </article >
    </div >
  )
}
export default Commodity