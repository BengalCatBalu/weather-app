import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { TimeCard } from "./components/Cards/TimeCard/TimeCard";
import { MainCard } from "./components/Cards/MainCard/MainCard";
import { LastDaysCard } from "./components/Cards/LastDaysCard/LastDaysCard";
import { HourlyForecast } from "./components/Cards/HourlyForecast/HourlyForecast";
function App() {
  return (
    <div className={"main"}>
      <Navbar />
      <section className={"content"}>
        <div className={"first_row"}>
          <TimeCard/>
          <MainCard/>
        </div>
        <div className={"second_row"}>
          <LastDaysCard/>
          <HourlyForecast/>
        </div>
      </section>
    </div>
  );
}

export default App;
