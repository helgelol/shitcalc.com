import { createSignal, For, Show, Switch, Match } from 'solid-js';
import type { Component } from 'solid-js';

const workingHoursPerYear = 1950;
const workingDaysPerYear = 230;
const workingDaysPerMonth = 22;
const shitsPerDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App: Component = () => {
  const [income, setIncome] = createSignal(600000);
  const [shitsTakenPerDay, setShitsTakenPerDay] = createSignal(1);
  const [timeItTakesToShit, setTimeItTakesToShit] = createSignal(0);
  const hourlySalary = () => income() / workingHoursPerYear;
  const dailyShittingTime = () => shitsTakenPerDay() * (timeItTakesToShit() / 60);
  const dailyShitIncome = () => dailyShittingTime() * hourlySalary();
  const monthlyShitIncome = () => dailyShitIncome() * workingDaysPerMonth;
  const yearlyShitIncome = () => dailyShitIncome() * workingDaysPerYear;
  const showResults = () => timeItTakesToShit() > 0 && !Number.isNaN(timeItTakesToShit());

  return (
    <main class="svg-bg flex w-full">
      <div class="center w-full">
        <h1 class="pt-6 font-medium text-2xl text-gray-100">Shitcalc.com</h1>
        <p class="text-gray-100 mt-4">After much demand, it's finally here!</p>
        <form class="mt-6">
          <p class="text-gray-100">Yearly Salary</p>
          <label>
            <input
              class="w-64"
              type="range"
              min="600000"
              max="1500000"
              step="25000"
              value={income()}
              onInput={(e) => setIncome(Number(e.currentTarget.value))}
            />
            <p class="text-gray-100">{income()}</p>
          </label>
          <p class="mt-8 text-gray-100">Shits per day</p>
          <select
            class="w-64 h-8 rounded-lg bg-gray-100"
            value={shitsTakenPerDay()}
            onInput={(e) => setShitsTakenPerDay(Number(e.currentTarget.value))}
          >
            <For each={shitsPerDay}>
              {(count) => <option value={count}>{count}</option>}
            </For>
          </select>

          <p class="mt-8 text-gray-100">Length of visit (minutes)</p>
          <label>
            <input
              class="w-64"
              type="range"
              min="5"
              max="30"
              step="5"
              value={timeItTakesToShit()}
              onInput={(e) => setTimeItTakesToShit(Number(e.currentTarget.value))}
            />
            <p class="text-gray-100">{timeItTakesToShit()}</p>
          </label>
          <Show when={Number.isNaN(timeItTakesToShit())}>
            <p class="text-red-300 text-2xl">Please enter a number</p>
          </Show>
        </form>
        <Switch>
          <Match when={shitsTakenPerDay() > 3}>
            <div class="mt-6 animate-bounce">
              <p class="text-gray-200 text-3xl font-bold">
                Seek out a medical professional 🚑
              </p>
              <p class="text-gray-200 mt-2">
                That is {shitsTakenPerDay()} times a day. You are dying.
              </p>
            </div>
          </Match>
          <Match when={showResults()}>
            <div class="mt-6">
              <p class="text-gray-100 text-xl">
                Daily Shit Income {Math.round(dailyShitIncome())}kr
              </p>
              <p class="text-gray-100 text-xl">
                Monthly Shit Income {Math.round(monthlyShitIncome())}kr
              </p>
              <p class="text-gray-100 text-xl">
                Yearly Shit Income {Math.round(yearlyShitIncome())}kr
              </p>
            </div>
          </Match>
        </Switch>
        <div class="text-gray-100 absolute bottom-0 mb-4 ml-4">
          <a href="https://helge.dev">by helge.dev</a>
        </div>
      </div>
    </main>
  );
};

export default App;
