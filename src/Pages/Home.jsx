import Categories from "../Components/Categories/Categories" 
import Newslatter from "../Components/Newslatter/Newslatter"
import Products from "../Components/Products/Products"
import Slider from "../Components/Slider/Slider" 

function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products /> 
      <Newslatter />
    </div>
  )
}

export default Home