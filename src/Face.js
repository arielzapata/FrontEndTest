import React from 'react';
import Styled from 'styled-components'
import EyeImage from './images/Eye.jpg'
import LipsImage from './images/Lips.jpg'
import Background from './images/background.jpg'
import Noise from './images/noise.png'

const MainContainer = Styled.div`
  width: 500px;
  height: 810px;
  margin-left: 380px;
  margin-top: 40px;
  overflow: hidden;
  z-index: 1;
  position: relative;
`;
const Hair = Styled.div`
  width: 530px;
  height: 530px;
  margin-left: -20px;
  margin-top: 0px;
  background: black;
  border-radius: 300px;  
  z-index: 1;
  position: relative; 
`;
const TopBall = Styled.div`
  width: 500px;
  height: 500px;
  margin-left: -10px;
  margin-top: -450px;
  background: #147298;
  border-radius: 300px;  
  z-index: 1;
  position: relative; 
`;
const LeftSquare = Styled.div`
  width: 250px;
  height: 270px;
  background: #075007;
  margin-top: -635px;
`;
const RightSquare = Styled.div`
  width: 250px;
  height: 270px;
  background: rgb(209,88,9);
  background: linear-gradient(190deg, rgba(209,88,9,1) 45%, rgba(191,41,8,1) 64%, rgba(176,13,8,0.928991579541973) 100%); 
  margin-top: -245px;
  margin-left: 250px;
`;
const LeftNeck = Styled.div`
  width: 135px;
  height: 400px;
  background: white;
  margin-left: 115px;
  margin-top: 250px;
  z-index: 2;
  position: relative;
  box-shadow: inset 0 0 5px #000000;
`;
const RightNeck = Styled.div`
  width: 135px;
  height: 400px;
  background: #0b5f0a;
  margin-top: -400px;
  margin-left: 245px;
  z-index: 2;
  position: relative;
  box-shadow: inset 0 0 10px #0c3f16;
`;
const BottomRight = Styled.div`
  width: 135px;
  height: 550px;
  background: rgb(131,172,184);
  background: linear-gradient(360deg, rgba(131,172,184,1) 35%, rgba(86,146,167,1) 61%, rgba(27,112,146,1) 74%); 
  margin-left: 370px;
  margin-top: -500px;
`;
const BottomLeft = Styled.div`
  width: 135px;
  height: 550px;
  background: rgb(209,88,9);
  background: linear-gradient(360deg, rgba(209,88,9,1) 62%, rgba(191,41,8,1) 80%, rgba(176,13,8,0.928991579541973) 100%); 
  margin-top: -550px;
`;
const LefFace = Styled.div`
  width: 190px;
  height: 450px;
  background: #f1deb3;
  border-bottom-left-radius: 200px 350px;
  border-top-left-radius: 50px 110px;
  z-index: 2;
  position: relative;
  margin-left: 55px;
  margin-top: -750px;
  box-shadow: inset 0 0 10px #000000;
`;
const RightFace = Styled.div`
  width: 180px;
  height: 450px;
  background: rgb(182,3,6);
  background: linear-gradient(90deg, rgba(182,3,6,1) 0%, rgba(203,66,11,1) 37%, rgba(237,140,10,1) 73%); 
  border-bottom-right-radius: 250px 400px;
  border-top-right-radius: 250px 170px;
  z-index: 3;
  position: relative;
  margin-left: 245px;
  margin-top: -451px ;
`;
const Diagonal = Styled.div`
  width: 186px;
  height: 400px;
  background: black;
  margin-left: 170px;
  margin-top: -600px ;
  z-index: 3;
  position: relative;
  transform: rotate(104deg);
`;
const Circle = Styled.div`
  width: 400px;
  height: 400px;
  margin-left: -10px;
  margin-top: 200px;
  background: #147298;
  border-radius: 300px;  
  z-index: 1;
  position:relative; 
`;
const SemiCircleRight = Styled.div`
width: 200px;
height: 400px;
background-color: #0b5f0a;
border-bottom-right-radius: 500px;
border-top-right-radius: 500px;
border-left: 0;
margin-left: 310px;
margin-top: -400px;
z-index: 1;
position:relative; 
box-sizing: border-box;
`;
const Eye = Styled.img`
  width: 145px;
  height: 180px; 
`;
const EyeContainer = Styled.div`
  margin-top:-715px;
  margin-left: -155px;
  z-index:2;
  position: relative;
  opacity: 0.9;
`;
const Lip = Styled.img`
  width: 85px;
  height: 90px; 
  opacity: 0.9;
`;
const LipContainer = Styled.div`
  margin-top:0px;
  margin-left: -90px;
  z-index:2;
  position: relative;
`;
const TextFooter = Styled.div`
  margin-top: 30px;
  margin-left: 114px;
  z-index:3;
  position: relative;
  font-size: 46px;
  font-weight:bold;
  text-align: left;
  line-height: 0;
  font-family: 'Jura', sans-serif;
`;
const P = Styled.p`
  margin-top: 80px;
  margin-bottom: -20px;
`;
const Stair = Styled.p`
  margin-top: ${props=>props.top}; 
  margin-bottom:75px;
  font-weight: bold;
`;
const Title = Styled.div`
  text-align: left; 
  z-index:3;
  position: relative;  
  margin-left: 65px;
  margin-top: -758px;
  color: #fac90b;
  line-height: 0;
  font-size: 67px;
  font-family: 'Jura', sans-serif;
`;
const Dot = Styled.div`
  width: ${props=>props.radius};
  height: ${props=>props.radius};
  margin-left: ${props=>props.left};
  margin-top: ${props=>props.top}; 
  background: #f1c002;
  border-radius: 300px;  
  z-index: 3;
  position:relative; 
`;
const Line = Styled.div`
  width: 112px;
  height: 47px;
  border-bottom: 6px solid #f1c002;
  z-index: 0;
  position: relative;
  margin-top: ${props=>props.top}; 
`;
const WordContainer = Styled.div`
  height: 100px;
  display: flex;
  margin-bottom: -15px;
  margin-top: ${props=>props.top}; 
`;
const ChestCover = Styled.div`
  z-index: 2;
  position: relative;
  margin-left: 300px;
  margin-top: 80px;
  width:100px;
  height: 100px;
  background:#0b5f0a;
`;
const BlurContainer = Styled.div`
  border: solid 1px black;
  width: 1200px;
  height: 900px;
  margin-left: 50px;
  margin-top:-850px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 1200px 1650px;
  background-position: center;
  filter: blur(15px);
  background-position:
    30% -100px,
    20%,
    20px 20px,
    50%,
    0 50%;
`;
const NoiseFilter = Styled.div`
  background-image: url(${Noise});
  opacity: 0.09;
  width: 500px;
  height: 1000px;
  margin-top: -930px;
  z-index: 4;
  position: relative;
`;
function CoverFace(props) {  
  const WordOne = { T: "90px", H: "92px", E: "100px" }
  const WordTwo = { V: "80px", A: "90px", N: "100px", I:"110px", S: "120px", H: "130px", I2: "140px", N2: "150px", G: "160px" }
  const WordThree = {F: "80px", U: "90px", T: "100px", U2: "110px", R: "120px", I: "130px", S:"140px", T2: "150px"}
  
  const LinesPositioning = () => {
    let lines = []    
    for (let line = 0; line < 11; line++) {
      lines.push(<Line top="-63px"></Line>)
    }
    return lines
  }

  const StairWords = (letters) => {
    let word = []
      Object.entries(letters).map(
        ([letter, position]) => [word.push(<Stair top={position}>{letter.charAt(0)}</Stair>
        )]
      )
    return (<WordContainer>{word}</WordContainer>)
  }

  return (
    <div>
      <MainContainer>
        <TopBall />
        <Hair />
        <LeftSquare />
        <RightSquare />
        <LeftNeck />
        <RightNeck />
        <BottomRight />
        <BottomLeft />
        <LefFace />
        <RightFace />
        <Diagonal />
        <Circle />
        <SemiCircleRight />
        <EyeContainer>
          <Eye src={EyeImage}/>
        </EyeContainer>
        <LipContainer>
          <Lip src={LipsImage}/>
        </LipContainer>
        <TextFooter>
          <P>CHARLOTTE</P>
          <P>HOBSON</P>
        </TextFooter>
        <Title>         
          { StairWords(WordOne) }      
          { StairWords(WordTwo) }
          { StairWords(WordThree) }        
        </Title>
        <Dot radius="28px" left="420px" top="-220px"/>
        <Dot radius="17px" left="50px" top="525px"/>
        <Dot radius="10px" left="435px" top="140px"/>
        <Line top="-35px"></Line>
        {LinesPositioning()}
        <ChestCover/>
        <NoiseFilter/>    
      </MainContainer>
      <BlurContainer/> 
    </div>
  );
}

export default CoverFace;
