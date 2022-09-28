import './App.css';
import 'antd/dist/antd.css';
import nft from './images/icons/nft.png';
import stock from './images/icons/stock.png';
import crypto from './images/icons/cryptocurrency.png';
import personal from './images/icons/personal-wealth.png'
import circleLogo from './images/bigLogoCircle.png';
import chartImage from './images/bgchartskris.jpg'
import bigLogo from './images/longAlmightyLogo.png'
// import Testimonials from './content/Testimonials';
import useWindowDimensions from './components/useWindowDimensions';
import { Layout, Menu, Image, Tooltip, Button, Divider } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'black'}}>
        <div style={{float: 'left', width: '260px', height: '50px', margin: '8px 24px 16px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <img src={bigLogo} alt='logo' style={{width: '275px'}}/>
          {/* <h1 style={{color: 'white', margin: '0px 0px 0px 5px'}}>ALMIGHTY STOCKS</h1> */}
        </div>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: 'black'}}>
          <Menu.Item key="1"><a href='#home' style={{color: 'white'}}>HOME</a></Menu.Item>
          <Menu.Item key="2"><a href='#info' style={{color: 'white'}}>INFORMATION</a></Menu.Item>
          {/* <Menu.Item key="3"><a href='#testimony' style={{color: 'white'}}>TESTIMONIALS</a></Menu.Item> */}
          <Menu.Item key="4"><a href='#payment' style={{color: 'white'}}>PAYMENT</a></Menu.Item>
          <Menu.Item key="5"><a href='#contact' style={{color: 'white'}}>CONTACT</a></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0px', marginTop: 64, alignItems: 'center' }}>
        <div className='App-content'>
          {/* Description */}
          <div id='home' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url(${chartImage})`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px',
          }}>
            <img src={circleLogo} alt='circle logo' style={{width: 300}}/>
          </div>
          {/* Content */}
          <div id='info' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            backgroundColor: 'white', padding: 20, scrollMarginTop: '64px'
          }}>
            {/* <h2>Content</h2> */}
            <div style={{flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column', display: 'flex', justifyItems: 'center'}}>
              <Image.PreviewGroup preview={{visible: false}}>
                <div style={{margin: 10}}>
                  {/* <Tooltip placement='top' title="Personal wealth icons created by Eucalyp - Flaticon https://www.flaticon.com/free-icons/personal-wealth"> */}
                    <Image width={250} src={personal}/>
                  {/* </Tooltip> */}
                  <p style={{color: 'black', textAlign: 'center', width: 250}}>This is a community with like minded investors building generational wealth through multiple sources of income you’ll be exposed to. </p>
                </div>
                <div style={{margin: 10,}}>
                  {/* <Tooltip placement='top' title="Trading icons created by Freepik - Flaticon https://www.flaticon.com/free-icons/trading"> */}
                    <Image width={250} src={stock}/>
                  {/* </Tooltip> */}
                  <p style={{color: 'black', textAlign: 'center', width: 250}}>There’s a plethora of education, daily signals, news, and bots for the USA stock market.</p>
                </div>
                <div style={{margin: 10}}>
                  {/* <Tooltip placement='top' title="Cryptocurrency icons created by Eucalyp - Flaticon https://www.flaticon.com/free-icons/cryptocurrency"> */}
                    <Image width={250} src={crypto}/>
                  {/* </Tooltip> */}
                  <p style={{color: 'black', textAlign: 'center', width: 250}}>Slight crypto/forex education and more.</p>
                </div>
                <div style={{margin: 10}}>
                  {/* <Tooltip placement='top' title="Nft icons created by wanicon - Flaticon https://www.flaticon.com/free-icons/nft"> */}
                    <Image width={250} src={nft}/>
                  {/* </Tooltip> */}
                  <p style={{color: 'black', textAlign: 'center', width: 250}}>Everything you need to know about how NFTs and how to purchase them.</p>
                </div>
              </Image.PreviewGroup>
            </div>
          </div>
          {/* Testimony */}
          {/* <div id='testimony' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url("https://wallpapercave.com/wp/wp1820764.jpg")`,
            minHeight: '400px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px'
          }}>
            <h2 style={{color: 'white', backgroundColor: '#111', padding: 10, width: '400px', textAlign: 'center'}}>Testimonials</h2>
            <Testimonials />
          </div> */}
          {/* Payment */}
          <div id='payment' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url("https://wallpapercave.com/wp/wp1820764.jpg")`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px'
          }}>
            <h2 style={{color: 'white', textAlign: 'center'}}>Join our 400+ members who are learning the market and building wealth!</h2>
            {/* <div style={{flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column', display: 'flex', justifyItems: 'center',}}>
              <div>
                <h3 style={{color: 'white', textAlign: 'center'}}>Monthly</h3>
                <div style={{width: '300px', textAlign: 'center'}}>
                  <Button target="_blank" ghost size='large' style={{backgroundColor: 'green'}} className="lp4980648539586560">
                    Monthly payment of $100.00
                  </Button>
                </div>
              </div>
            </div> */}
            <iframe src='https://launchpass.com/almighty-stocks/subscribers' width='100%' height='612'
              style={{backgroundColor: 'white'}} />
          </div>
          {/* Contact */}
          <div id='contact' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url("https://wallpapercave.com/wp/wp1820764.jpg")`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px'
          }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1yMBRGqcCL8lZWcHfZKBN_vogdRiULGmGCG_4WCcSj_6itw/viewform?embedded=true"
              width={useWindowDimensions().width < 640 ? "95%" : "640"} height="712" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Made By ANT DESIGNS LLC
        <br />
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/antdesignsllc/'>INSTAGRAM</a>
        <br />
        <a target="_blank" rel="noreferrer" href='https://antdesignsllc.github.io/antdesllc/'>WEBSITE</a>
      </Footer>
    </Layout>
  );
}

export default App;
