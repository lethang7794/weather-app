import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteNavBar from './components/SiteNavBar';
import WeatherCard from './components/WeatherCard';
import { Container, Row, Col } from 'react-bootstrap';
import BlurBackground from './components/BlurBackground';

import LoadingSpinner from './components/LoadingSpinner';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [shouldShowApp, setShouldShowApp] = useState(false);
  const [errorGetLocation, setErrorGetLocation] = useState(false);

  const [currentPosition, setCurrentPosition] = useState({
    latitude: null,
    longitude: null,
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const [scale, setScale] = useState('metrics');

  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    try {
      setLoading(true);
      setError(false);

      let response = await fetch(url);
      let data = await response.json();

      if (response.ok) {
        setData(data);

        setTimeout(() => {
          setLoading(false);
          setError(false);
        }, 1000);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  // Get the location from geolocation API
  useEffect(() => {
    const handleSuccess = (location) => {
      console.log(location);

      setCurrentPosition({
        latitude: location.coords.latitude.toFixed(3),
        longitude: location.coords.longitude.toFixed(3),
      });
      setShouldShowApp(true);
    };

    const handleError = (error) => {
      // alert("    We don't know where you are, but we will find you!");
      console.log(error);
      setErrorGetLocation(true);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  // Get Weather info if location is updated
  useEffect(() => {
    if (currentPosition.latitude && currentPosition.longitude) {
      getWeather(currentPosition.latitude, currentPosition.longitude);
    }
  }, [currentPosition]);

  return (
    <>
      <div className='App'>
        <BlurBackground />

        {!shouldShowApp && !errorGetLocation && (
          <div className='vh-100 vw-100 d-flex justify-content-center align-items-center p-2'>
            <LoadingSpinner />
          </div>
        )}

        {!!errorGetLocation && (
          <div className='vh-100 vw-100 d-flex justify-content-center align-items-center p-2'>
            <h1 className='text-center text-white'>
              Sorry, We Can't Get Your Location!
            </h1>
          </div>
        )}

        {!!shouldShowApp && (
          <>
            <SiteNavBar />

            <Container className='Container flex-grow-1 d-flex flex-column'>
              <Row className='Main h-100 flex-grow-1'>
                <Col>
                  {!!loading && <LoadingSpinner />}
                  {!!error && (
                    <h1 className='text-center text-white'>
                      Sorry, something went wrong! 🙇‍♂️
                    </h1>
                  )}
                  {!loading && !error && !!data && (
                    <WeatherCard data={data} scale={null} />
                  )}
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default App;
