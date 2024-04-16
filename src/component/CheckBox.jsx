import React, { useEffect, useState } from "react";
import Prayer from "./Prayer";
import CitySelection from "./CitySelection";
import axios from "axios";

export default function CheckBox() {
    // GET DATA FORM THE API
    const getData = async () => {
        const data = await axios.get(
            `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}&method=4`
        );
        setTiming(data.data.data.timings);
    };

    // TIMING STATE
    const [timings, setTiming] = useState({
        Fajr: "00:00",
        Sunrise: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Maghrib: "00:00",
        Isha: "00:00",
    });

    // CITY STATE
    const [city, setCity] = useState("Riyadh");

    // event handler to detict any changes on select
    const handleCityChange = (e) => setCity(e.target.value);

    // UPDATE TIMINGS STATE - update if city changed
    useEffect(() => {
        getData();
    }, [city]);

    return (
        <>
            {/* SELECTION BAR */}
            <div className=" my-10">
                <CitySelection handler={handleCityChange} />
            </div>

            {/* PRAYER CARDS */}
            <ul className="flex flex-wrap justify-evenly">
                <li className="m-2">
                    <Prayer name="Fajr" time={timings.Fajr} />
                </li>
                <li className="m-2">
                    <Prayer name="Sunrise" time={timings.Sunrise} />
                </li>
                <li className="m-2">
                    <Prayer name="Dhuhr" time={timings.Dhuhr} />
                </li>
                <li className="m-2">
                    <Prayer name="Asr" time={timings.Asr} />
                </li>
                <li className=" m-2">
                    <Prayer name="Maghrib" time={timings.Maghrib} />
                </li>
                <li className="m-2">
                    <Prayer name="Isha" time={timings.Isha} />
                </li>
            </ul>
        </>
    );
}
