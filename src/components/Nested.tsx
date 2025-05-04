import { createSignal } from "solid-js";

export const Nested = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-4">Nested Component</h1>
      <p class="text-xl mb-4">Count: {count()}</p>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Increment Count
      </button>
    </div>
  );
};
