import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaSignal } from 'react-icons/fa';

const EarthquakeDetails = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-10&endtime=2023-03-20')
      .then(res => res.json())
      .then(data => setEarthquakes(data.features))
      .catch(error => console.log(error))
  }, []);

  if (earthquakes.length === 0) {
    return <div>Loading earthquake data...</div>;
  }

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">تفاصيل الزلزال</h1>
        <div className="row g-4">
          {earthquakes.map((earthquake, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    <FaMapMarkerAlt className="me-2" />
                    {earthquake.properties.place}
                  </h5>
                  <h4 className={`card-text ${earthquake.properties.mag < 3 ? "text-success" : earthquake.properties.mag >= 3 && earthquake.properties.mag < 4 ? "text-warning" : earthquake.properties.mag >= 4 && earthquake.properties.mag < 5 ? "text-danger" : "text-danger"}`}>
                    <FaSignal className="me-2" />
                    الشدة: {earthquake.properties.mag}
                  </h4>
                  <p className="card-text text-muted">
                    <FaClock className="me-2" />
                    الزمن المنقضي: {Math.floor((new Date().getTime() - new Date(earthquake.properties.time).getTime()) / (1000 * 60))} دقائق
                  </p>
                  <p className="card-text text-muted">
                    التاريخ: {new Date(earthquake.properties.time).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default EarthquakeDetails;
