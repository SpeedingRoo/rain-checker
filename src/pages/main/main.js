import React, { useState, useEffect} from "react";
import { SBody, SPart, SForm, SInput, SButton } from "../../components/styles";
import axios from "axios";
import Card from "../../components/card";
import Modal from "../../components/modal";
import beijing_img from "../../images/cities/beijing.png";
import mel_img from "../../images/cities/melb.png";
import syd_img from "../../images/cities/syd.png";
import lond_img from '../../images/cities/lond.png';

const MainPage = () => {
  const [targetCity, setTargetCity] = useState('');
  const [targetCityWeather, setTargetCityWeather] = useState(null);
  const [noMatch, setNoMatch] = useState({ display: "none", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [json_w_data, setJson_w_data]= useState({});

  const [beijingWeather, setBeijingWeather] = useState([]);
  const [melbourneWeather, setMelbourneWeather] = useState([]);
  const [sydneyWeather, setSydneyWeather] = useState([]);
  const [londonWeather, setLondonWeather] = useState([]);

  const defaultCities = [
    ['beijing', setBeijingWeather,'CN'],
    ['Melbourne', setMelbourneWeather,'AU'],
    ['Sydney', setSydneyWeather,'AU'],
    ['london', setLondonWeather,'GB'],
  ];

  const APIkey = 'f620a018d0f4d826614d158f97a3f828';
  // process.env.REACT_APP_WEATHER_API;
  // f620a018d0f4d826614d158f97a3f828
  // const APIcallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
  
  const getWeatherIcon = (key)=>{
    return `http://openweathermap.org/img/wn/${key}@2x.png`;
  }
  function getInput(e) {
    setTargetCity(e.target.value);
  };

  function clearField(e) {
    setTimeout(
      ()=>{
        setTargetCityWeather(null);
        e.target.value = '';
      }
      ,300)
  };

  async function getCityWeatherData(city,func){
    const APIcallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    await axios.get(APIcallUrl)
    .then(
      (res)=>{
        const temp = Math.floor(((res.data.main.feels_like - 273.15)*100)/100);
        const icon = getWeatherIcon(res.data.weather[0].icon);
        func([temp,icon]);
      }
    )
    .catch(
      err => {
        err.response ?
        window.alert(err.response.data.message)
        :
        window.alert(err.response.data.message);
  
      }
    )
  };

  useEffect(
      ()=>{
          setTimeout(()=>{
            defaultCities.map((item,key) => {
              getCityWeatherData(item[0], item[1]);
            });
          },1);
      }
  ,[]);

  async function checkWeatherData(e) {
        getCityWeatherData(targetCity,setTargetCityWeather);
        e.preventDefault();
  }

  // function displayError() {
  //   setNoMatch({ display: "block", message: `No Such City, Try Again`});
  // }

  return (
    <SBody className="main-page">
      <SPart vertical={false}>
        <h2>
          {targetCityWeather
            ? <div>
              The temperature of {targetCity.toUpperCase()} is {targetCityWeather[0]} &#8451;
              <img src={targetCityWeather[1]} alt='weather symbol'/>
            </div>
            : "search for today's weather of any city"}
        </h2>
      </SPart>
      <SPart vertical={false}>
        <SForm onSubmit={checkWeatherData}>
          <SInput
            type="text"
            defaultValue="start typing here"
            onChange={getInput}
            onFocus={clearField}
          />
          <SButton type="submit">
            Check
          </SButton>
        </SForm>
      </SPart>
      <div className='modal' onError={null}></div>
      <SPart vertical={false}>
        <Card city="Beijing" temp={beijingWeather[0]} weatherIcon={beijingWeather[1]} bg_url={beijing_img}/>
        <Card city="Melbourne" temp={melbourneWeather[0]} weatherIcon={melbourneWeather[1]} bg_url={mel_img}/>
        <Card city="Sydney" temp={sydneyWeather[0]} weatherIcon={sydneyWeather[1]} bg_url={syd_img}/>
        <Card city="London" temp={londonWeather[0]} weatherIcon={londonWeather[1]} bg_url={lond_img}/>
      </SPart>
      <SPart vertical={false}>
        <h1 style={{ display: noMatch.display }}>{noMatch.message}</h1>
      </SPart>
      <SPart vertical={false}>
        <Modal message={noMatch.message} shown={showModal}/>
      </SPart>
    </SBody>
  );
};

export default MainPage;
