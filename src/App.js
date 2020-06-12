import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './images/hr-logo.png';
import NigeriaFlag from './images/ng-flag.png';
import GhanaFlag from './images/gh-flag.png';
import KenyaFlag from './images/kn-flag.png';
import CarouselImage from './images/slide-img1.jfif';
import CustOfficeImage from './images/cu-office.jfif';
import VirtualOfficeImage from './images/vo-office.jfif';
import ServOfficeImage from './images/s-offices.jfif';
import MeetingOfficeImage from './images/mr-office.jfif';


function App() {
  return (
    <div className="horizonsOffice">
    	<div style={{marginTop: '-7vh', marginLeft:'3vw'}}>
        	<img src={Logo} />
  
      	</div>
      	<div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '-17vh'}}>
        	<div >
          		<img src={GhanaFlag} style={{width: '7vw', height: '7vh', paddingLeft: '35vw'}}/>
    
        	</div>
        	<div>
        		<img src={NigeriaFlag} style={{width: '7vw', height: '7vh'}} />
  
        	</div>  
        	<div>
        		<img src={KenyaFlag} style={{width: '7vw', height: '7vh', paddingRight: '35vw'}}/>
  
        	</div>
		</div>
		<div style={{float: 'right', marginTop: '-11vh', marginRight: '3vw'}}>
			<h1 style={{color: '#0c0566', fontFamily: 'Calibri'}}>ABOUT US</h1>
		</div>

		<div>

			<img src={CarouselImage} style={{width: '100%', height: '70vh'}}></img>

		</div>
		<h1 style={{textAlign: 'center', color: 'brown'}}>PLANS</h1>

		<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<div style={{width: '20vw', height: '65vh', border: '0.5px solid grey', marginLeft: '5vw', borderRadius: '3px'}}>
				<img src={VirtualOfficeImage} style={{width: '19.3vw', height: '30vh', padding: '5px'}} />
				<h3 style={{textAlign: 'center', color: 'brown'}}>VIRTUAL OFFICES</h3>
				<p style={{textAlign: 'center'}}>
					Our virtual Offices allow your businesses to get our location address,
					phone services and also you become a member of our community with benefits such as
					access to our meeting rooms.
				</p>
			</div>
			<div style={{width: '20vw', height: '65vh', border: '0.5px solid grey', borderRadius: '3px'}}>
				<img src={CustOfficeImage} style={{width: '19.3vw', height: '30vh', padding: '5px'}} />
				<h3 style={{textAlign: 'center', color: 'brown'}}>CUSTOMIZED OFFICES</h3>
				<p style={{textAlign: 'center'}}>
					Our customized offices offer a great location for your businesses and you can customized
					your office to suit your preferences. Also, you become a member of our community with
					benefit such as access to our meeting rooms.
				</p>
			</div>
			<div style={{width: '20vw', height: '65vh', border: '0.5px solid grey', borderRadius: '3px'}}>
				<img src={ServOfficeImage} style={{width: '19.3vw', height: '30vh', padding: '5px'}} />
				<h3 style={{textAlign: 'center', color: 'brown'}}>SERVICED OFFICES</h3>
				<p style={{textAlign: 'center'}}>
					Our serviced offices offer a great location for your business and we provide services
					such as internet, utilities and offers from our partners. Also, you become a member of
					our community with benefits such as access to our meeting rooms.
				</p>
			</div>
			<div style={{width: '20vw', height: '65vh', border: '0.5px solid grey', marginRight: '5vw', borderRadius: '3px'}}>
				<img src={MeetingOfficeImage} style={{width: '19.3vw', height: '30vh', padding: '5px'}} />
				<h3 style={{textAlign: 'center', color: 'brown'}}>MEETING ROOMS</h3>
				<p style={{textAlign: 'center'}}>
					Our meeting rooms offer a great location for your meeting with your clients or business
					partners. We provide presentation equipment and coffee. Also, you become a member of our
					community with benefits such as access to our meeting rooms.
				</p>
			</div>
		</div>
		<div style={{backgroundColor: '#0c0566', width: '89vw', height: '30vh', display: 'flex', justifyContent: 'space-evenly', marginLeft: '5vw', marginRight: '10vw', marginTop: '5vh'}}>

			<div style={{width: '25vw', textAlign: 'center'}}>
				<h4 style={{color:'brown'}}>
					VISIT US IN KENYA
				</h4>
				<p style={{color:'green'}}>Nairobi,Kenya</p>
				<p style={{color:'white'}}>Belgravia Center, Riverside drive, 4th floor, Off riverside drive Hanover Center,
				14 Riverside Drive, 6th floor, off Riverside Drive
				</p>
			</div>
			
			<div style={{width: '25vw', textAlign: 'center'}}>
			<h4 style={{color:'brown'}}>VISIT US IN GHANA</h4>
				<p style={{color:'green'}}>Accra,Ghana</p>
				<p style={{color:'white'}}>
					One Airport Square, Airport City 8th floor
				</p>
			</div>
			
			<div style={{width: '25vw', textAlign: 'center'}}>
			<h4 style={{color:'brown'}}>VISIT US IN NIGERIA</h4>
				<p style={{color:'green'}}>Lagos,Nigeria</p>
				<p style={{color:'white'}}>
					Sterling bank building
				</p>
			</div>

		</div>

    </div>
  );
}

export default App;
