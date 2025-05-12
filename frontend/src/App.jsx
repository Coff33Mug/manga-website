import { useState } from 'react'
import './App.css'
import SearchHeader from './components/SearchHeader'
import CardContainer from './components/CardContainer';

function App() {

  const[format, setFormat] = useState('');

  return (
    <>
    <div style={{ margin: 25 }}>
      <div className="mainGridWrapper">
        <div className="contentElement">
          <SearchHeader />

          {/* Cards */}
          <div className="contentGridWrapper" id="cardContainer">
            <div className="contentDisplayCard">
              <img src="cat.png" />
              <span className="contentName">Cat</span>
              <div className="contentStats">
                <svg fill="#eab308" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z" />
                </svg>
                <p id="rating">7.2</p>
              </div>
              <div className="contentStatus">
                <svg width="24px" height="24px" viewBox="4 5 15 15" fill="lime" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
                </svg>
                <p>Ongoing</p>
              </div>

              <div className="contentTags">
                <div className="contentTag"><span>Comedy</span></div>
                <div className="contentTag"><span>Horror</span></div>
                <div className="contentTag"><span>Drama</span></div>
                <div className="contentTag"><span>Mystery</span></div>
                <div className="contentTag"><span>Novel</span></div>
                <div className="contentTag"><span>English</span></div>
              </div>

              <p className="contentDescription">Funny cat hehe</p>
            </div>

            <CardContainer title={"ReallyLongCattttttttttttttttttttttttttt"} rating={5.6} tags={''} status={"Completed"} description={"Cat stories done"} image={'cat.png'}/>
            <CardContainer title={"Cat3"} rating={6.0} tags={''} status={"Cancelled"} description={"Really long descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn!"} image={'cat.png'}/>
            <CardContainer title={"Cat4"} rating={9.7} tags={''} status={"Hiatus"} description={"Dynamically component???"} image={'cat.png'}/>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="navigationButtonWrapper">
              <button className="navigationButton" style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z" fill="white"/>
                </svg>
              </button>
              <button className="navigationButton" style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* TODO: Make components of account information */}
        <div className="accountElementSideBar">
          <div className="accountInformation">
            <img id="accountProfilePicture" src="cat.png" />
            <p style={{ color: "white" }}>Guest</p>
          </div>
          <div className="accountNavigation">
            <a href="" id="signInButton" className="navigationButton"> Sign in </a>
            <a href="" id="registerButton" className="darkNavigationButton">Register</a>
          </div>
        </div>
        <div className="accountElementSignedIn">
          <div className="accountInformation">
            <img id="accountProfilePicture" src="cat.png" />
            <p style={{ color: "white" }}>Username</p>
          </div>
          <div className="accountNavigation">
            <a href="" className="navigationButton">Profile</a>
            <a href="" className="darkNavigationButton">Followed</a>
            <a href="" className="darkNavigationButton">My Lists</a>
            <div style={{ borderBottom: "solid white", height: 10, marginBottom: "-5p3"}}></div>
            <a href="" className="darkNavigationButton">Sign Out</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
