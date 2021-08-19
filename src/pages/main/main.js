import React, { useState } from "react";
import { SBody, SForm, SInput, SButton } from "../../components/styles";
import axios from "axios";
import Card from "../../components/card";

const MainPage = () => {
  const [city, setCity] = useState("");
  const [counter, setCounter] = useState(0);
  const [weatherData, setWeatherData] = useState("");
  const APIkey = "f620a018d0f4d826614d158f97a3f828";
  const APIcallUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  function getInput(e) {
    setCity(e.target.value);
  }

  function clearField(e) {
    e.target.value = city;
  }

  async function myOnClick() {
    await axios({
            method: 'get',
            url: APIcallUrl,
        })
        .then( res => {
                    setWeatherData(res.data.main.temp);
                    console.warn(res);
        })
        .catch( err => {
            console.log(err);
        });

  }

  function minus() {
    setCounter(counter - 1);
  }

  function plus() {
    setCounter(counter + 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <SBody className="main-page">
      <section>
        <SForm>
          <SInput
            type="text"
            defaultValue="start typying here"
            onChange={getInput}
            onFocus={clearField}
          />
        </SForm>
        <SButton type="button" onClick={myOnClick}>
          Check
        </SButton>
      </section>
      <section>
        <span>{city}</span>
      </section>
      <section>
        <SButton onClick={minus}>MINUS -</SButton>
        <SButton onClick={reset}>/ refresh /</SButton>
        <SButton onClick={plus}>PLUS +</SButton>
      </section>
      <section>
        <Card city="Beijing" temp="-10" />
        <Card city="London" temp="5" />
      </section>
      <section>
        <p>
          clicked <span>{counter}</span> times
        </p>
        <p>the weather data is { weatherData}</p>
      </section>
    </SBody>
  );
};

export default MainPage;
