import React, { useState } from "react";
import { SBody, SPart, SForm, SInput, SButton } from "../../components/styles";
import axios from "axios";
import Card from "../../components/card";
import Modal from "../../components/modal";

const MainPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [noMatch, setNoMatch] = useState({ display: "none", message: "" });
  const [showModal, setShowModal] = useState(true);
  const APIkey = "f620a018d0f4d826614d158f97a3f828";
  const APIcallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  function getInput(e) {
    setCity(e.target.value);
  }

  function clearField(e) {
    e.target.value = city;
  }

  function popModal() {
    setShowModal(true);
    const msg = `fuck lightman SOB |  ${showModal ? 'true':'false'}`;
    window.alert(msg);
  }
  async function myOnClick() {
      await setTimeout(() => {
        axios({
          method: "get",
          url: APIcallUrl,
        })
          .then((res) => {
            setWeatherData(res.data.main.temp - 273.15);
            console.log(res);
          })
          .catch((err) => {
            window.alert(`Show Modal is ${showModal}`);
            popModal();
            setNoMatch({ display: "block", message: `The city doesn't exists!` });
            console.log(err);
          });
      }, 100);
  }

  // function displayError() {
  //   setNoMatch({ display: "block", message: `No Such City, Try Again`});
  // }

  return (
    <SBody className="main-page">
      <SPart vertical={false}>
        <SForm>
          <SInput
            type="text"
            defaultValue="start typing here"
            onChange={getInput}
            onFocus={clearField}
          />
          <SButton type="button" onClick={myOnClick}>
            Check
          </SButton>
        </SForm>
      </SPart>
      <SPart vertical={false}>
        <h1 style={{ display: noMatch.display }}>{noMatch.message}</h1>
        <Modal message={noMatch.message} shown={true}/>
      </SPart>
      <SPart vertical={true}>
        <Card city="Beijing" temp="-10" />
        <Card city="London" temp="5" />
      </SPart>
      <SPart vertical={false}>
        <p>the weather data of <span>{city.toUpperCase()}</span> is {weatherData}</p>
      </SPart>
    </SBody>
  );
};

export default MainPage;
