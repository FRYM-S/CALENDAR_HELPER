import { useState } from "react";
// import "./App.css";
import CheckBox from "./component/CheckBox";

function App() {
    return (
        <>
            <main className="grid grid-rows-8 grid-flow-col gap-2 min-h-screen m-0 p-5 pt-0 pb-0 text-center bg-gradient-to-br from-sky-800 to-teal-700 selection:bg-teal-500">
                <header className="flex flex-col items-center justify-center gap-4 row-span-2 p-5 rounded-b-3xl bg-white/40 shadow-md">
                    <h1 className="text-3xl font-bold text-gray-800 ">
                        PRAYER TIMES
                    </h1>
                    <p className="text-md font-medium text-gray-600 ">
                        Add prayer times to your daily plans to manage your time
                        easily 👌
                    </p>
                </header>
                <section className="flex flex-col items-center justify-center gap-4 row-span-5 p-5 rounded-3xl bg-white/40 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">
                        CLICK PRAYER TO ADD
                    </h2>
                    <CheckBox />
                </section>
                <footer className="flex flex-col items-center justify-center row-span-1 text-gray-400 bg-white/40 rounded-t-3xl shadow-md">
                    <p className="text-sm font-medium text-gray-800">
                        © 2024 PRAYER TIMES. All rights reserved.
                    </p>
                </footer>
            </main>
        </>
    );
}

export default App;
