import React, { useState } from "react";
import { SBody, SPart, SForm, SInput, SButton } from "../../components/styles";
import axios from "axios";
import Card from "../../components/card";
import Modal from "../../components/modal";
import beijing_img from "../../images/cities/beijing.png";
import mel_img from "../../images/cities/melb.png";
import syd_img from "../../images/cities/syd.png";
import lond_img from '../../images/cities/lond.png';

const MainPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [noMatch, setNoMatch] = useState({ display: "none", message: "" });
  const [showModal, setShowModal] = useState(false);
  const APIkey = process.env.REACT_APP_weatherAPI;
  const APIcallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  function getInput(e) {
    setCity(e.target.value);
  }

  function clearField(e) {
    e.target.value = city;
  }

  const [json_w_data, setJson_w_data]= useState({});

  async function clickForWeatherData(e) {
      await setTimeout(
        () => {
          axios({
          method: "get",
          url: APIcallUrl,
          })
          .then((res) => {
            setJson_w_data(res.data);
            setWeatherData(res.data.main.temp - 273.15);
            console.log(res);
          })
          .catch((err) => {
            // window.alert(`1.showModal is ${showModal}`);
            setShowModal(true);
            // window.alert(`2.showModal is ${showModal}`);
            // window.alert(`a. ${noMatch.message}`);
            setNoMatch({ display: "block", message: `The city doesn't exists!` });
            // window.alert(`b. ${noMatch.message}`);
            console.log(err);
          });
        }
        , 100);

      e.preventDefault();
  }

  // function displayError() {
  //   setNoMatch({ display: "block", message: `No Such City, Try Again`});
  // }

  return (
    <SBody className="main-page">
      <SPart vertical={false}>
        <SForm onSubmit={clickForWeatherData}>
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
      <SPart vertical={false}>
        <Card city="Beijing" temp="-10" bg_url={beijing_img}/>
        <Card city="Melbourne" temp="15" bg_url={mel_img}/>
        <Card city="Sydney" temp="22" bg_url={syd_img}/>
        <Card city="London" temp="20" bg_url={lond_img}/>
      </SPart>
      <SPart vertical={false}>
        <p>the weather data of <span>{city.toUpperCase()}</span> is {weatherData}</p>
      </SPart>
      <SPart>
        <section>
          JSON weather data is: {JSON.stringify(json_w_data.main)}
        </section>
      </SPart>
      <SPart vertical={false}>
        <h1 style={{ display: noMatch.display }}>{noMatch.message}</h1>
      </SPart>
      <SPart>
        <Modal message={noMatch.message} shown={showModal}/>
      </SPart>
    </SBody>
  );
};

export default MainPage;
