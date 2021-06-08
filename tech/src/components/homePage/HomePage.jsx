
import React, {useState} from 'react'
import './HomePage.css'
import { Layout } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Slider from '../slider/Slider';
import Carousel from 'react-elastic-carousel';
import Demo from '../demo/Demo'




const { Header, Footer, Sider, Content } = Layout;

function HomePage() {

    const [toggleOn, setToggleOn] = useState(false)


    const breakPoints = [
        { width: 100, itemToShow: 1},
        { width: 350, itemToShow: 2 },
        { width: 560, itemToShow: 3 },
        { width: 700, itemToShow: 4 }
    
      ]
    return (
        <div>
       <Layout>
      <Header className="header">
            <div className="logoes">
                <div className="pic">
                    <img className= "tech-career" src="Images/logo1.jpeg" alt = ""/>

                </div>
                
                <Button type="primary" className="signin" onClick={()=> setToggleOn(previousState => !previousState)}> Sign in</Button>

            </div>

      </Header>
      <Content className="content">
         {toggleOn && <Demo/>} 
            
            <Carousel breakPoints={breakPoints}>

                <Slider number= "1"/>
                <Slider number= "2"/>
                <Slider number= "3"/>
                <Slider number= "4"/>

        </Carousel>
      </Content>

      <Footer className="footer"><h1>Footer</h1></Footer>
    </Layout>
        </div>

        
    )
}

export default HomePage
