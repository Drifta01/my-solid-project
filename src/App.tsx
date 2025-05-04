import type { Component } from "solid-js";
import { Nested } from "./components/Nested";
import { Header } from "./components/Header";

const App: Component = () => {
  return (
    <>
      <Header />
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <input
        type="text"
        class="border-2 border-gray-300 rounded-md mx-8 px-2 py-2"
        placeholder="Type here..."
      />
      <Nested />
    </>
  );
};

export default App;
