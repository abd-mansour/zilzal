import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaClock, FaSignal } from 'react-icons/fa';

import moment from 'moment';
import 'moment/locale/ar';

const EarthquakeDetails = () => {
    const [earthquakes, setEarthquakes] = useState([]);

    useEffect(() => {
        fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-11&endtime=2023-03-14')
            .then(res => res.json())
            .then(data => setEarthquakes(data.features))
            .catch(error => console.log(error))
    }, []);

    if (earthquakes.length === 0) {
        return (
            <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <strong>تحميل البيانات ...</strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
            </div>
        );
    }

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {earthquakes.map((earthquake, index) => (
                        <div className="col" key={index}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <p className="card-text">{earthquake.properties.place}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group gap-2 text-end">
                                            <button
                                                type="button"
                                                className={`btn btn-secondary btn-sm ${earthquake.properties.mag < 2 ? 'btn-secondary' : earthquake.properties.mag < 3 ? 'btn-success' : earthquake.properties.mag >= 3 && earthquake.properties.mag < 4 ? 'btn-warning' : earthquake.properties.mag >= 4 && earthquake.properties.mag < 5 ? 'btn-danger' : 'btn-danger'} font-weight-bold`}
                                            >
                                                {earthquake.properties.mag.toFixed(1)}  <FaSignal />
                                            </button>

                                            <p className="card-text text-muted"><small>
                                                التاريخ: {moment(earthquake.properties.time).locale('ar').format("dddd DD MMMM")}
                                                </small>
                                            </p>
                                        </div>
                                        <small className="text-muted text-bold">
                                            {Math.floor((new Date().getTime() - new Date(earthquake.properties.time).getTime()) / (1000 * 60))}{" "}
                                            دقائق
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EarthquakeDetails;
