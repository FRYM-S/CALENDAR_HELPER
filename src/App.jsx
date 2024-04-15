import { useState } from "react";
// import "./App.css";
import CheckBox from "./component/CheckBox";

function App() {
    return (
        <>
            <main className="grid grid-rows-6  grid-flow-col gap-2 min-h-screen m-0 p-7 pt-0 bg-slate-600  font-gfont">
                <header className="flex flex-col items-center justify-center gap-4 p-5 rounded-b-3xl  bg-white/40">
                    <h1 className=" ">PRAYER TIMES</h1>
                    <p>
                        add to your dayly plans prayer times to manage your time
                        easily 👌
                    </p>
                </header>
                <section className="flex flex-col items-center justify-center gap-4 row-span-5 rounded-3xl bg-white/40 p-5">
                    <h2>CLICK PRAYER TO ADD</h2>
                    <CheckBox />
                </section>
            </main>
        </>
    );
}

export default App;
