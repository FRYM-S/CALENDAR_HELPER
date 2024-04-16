import { useState } from "react";
import CheckBox from "./component/CheckBox";
import SignatureFooter from "./component/SignatureFooter";

function App() {
    return (
        <>
            <main className="grid grid-rows-12 grid-flow-col gap-3 min-h-screen m-0 px-5 text-center bg-gradient-to-br from-sky-800 to-teal-700 selection:bg-teal-500">
                <header className="flex flex-col items-center justify-center gap-4 row-span-2 p-5 rounded-b-3xl bg-white/40 shadow-md">
                    <h1 className="text-3xl font-bold text-gray-800 ">
                        PRAYER TIMES
                    </h1>
                    <p className="text-md font-medium text-gray-800 ">
                        Add prayer times to your google calendar to manage your
                        time easily 👌
                    </p>
                </header>
                <section className="flex flex-col items-center justify-center gap-4 row-span-9 p-7 rounded-3xl bg-white/40 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">
                        CLICK PRAYER TO ADD
                    </h2>
                    <CheckBox />
                </section>
                <footer className="flex flex-wrap items-center justify-center row-span-1 gap-2 text-gray-400 bg-white/40 rounded-t-3xl shadow-md">
                    <SignatureFooter />
                </footer>
            </main>
        </>
    );
}

export default App;
