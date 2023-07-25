import Button from "./components/Button"
import Heading from "./components/Heading"
import Peragraph from "./components/Peragraph"
import Image from "./components/Image"
import Logo from "./assets/logo.png"
import Banner from "./assets/banner.png"
import CollectionA from "./assets/collectionOne.png"
import CollectionB from "./assets/collectionTwo.png"
import CollectionC from "./assets/collectionThree.png"
import Feshon from "./assets/feshon.png"
import SellarA from "./assets/sellarA.png"
import SellarB from "./assets/sellarB.png"
import Menu from "./components/Menu"
import Counter from "./components/Counter"

function App() {
  return (
    <>
       <section> 
          <Heading text = "Find The Best Fashion Style For You" as ="h1" type = "banner"/> 
          <Heading text = "New Collection" as ="h2" /> 
          <Heading text = "Best Fashion Since 2010" as ="h2" /> 
      </section>

      <section>
         <Button text = "Login" type ="btnA"/>
         <Button text = "Sign up" type ="btnA"/>
         <Button text = "SHOP NOW" type ="btnB"/>
         <Button text = "Sweater" />
         <Button text = "Jeans" />
         <Button text = "Baskets" />
         <Button text = "Learn MORE" type ="btnB"/>
      </section>

      <section >
         <Peragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "   type = "textA" />
         <Peragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "   type = "textB" />
         <Peragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."  />
      </section>
     
     <section className="ml-10">
         <Menu text= "Home"/>
         <Menu text= "Woman"/>
         <Menu text= "Kids"/>
         <Menu text= "Collection"/>
         <Menu text= "Trends"/>
     </section>

    <section>
    < Counter textA ="2010" textB = "Founded"/>
    < Counter textA ="5000+" textB = "Product Sold"/>
    < Counter textA ="4500+" textB = "Best Reviews"/>
    </section>
      <section>
        <Image src = {Logo}/>
        <Image src = {Banner}/>
        <Image src = {CollectionA}/>
        <Image src = {CollectionB}/>
        <Image src = {CollectionC}/>
        <Image src = {Feshon}/>
        <Image src = {SellarA}/>
        <Image src = {SellarB}/>
      </section>

    </>
 
  )
}

export default App
