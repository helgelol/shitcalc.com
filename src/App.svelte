<script>
  const workingHoursPerYear = 1950;
  const workingDaysPerYear = 230;
  const workingDaysPerMonth = 22;
  let hourlySalary = 0;
  let dailyShittingTime = 0;
  let income = 400000;
  let shitsPerDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let shitsTakenPerDay;
  let timeItTakesToShit = 0;
  let dailyShitIncome = 0;
  let monthlyShitIncome = 0;
  let yearlyShitIncome = 0;
  let calculationComplete = false;

  function calculateMoneyMadeWhileShitting() {
    hourlySalary = income / workingHoursPerYear;
    dailyShittingTime = shitsTakenPerDay * (timeItTakesToShit / 60);
    dailyShitIncome = dailyShittingTime * hourlySalary;
    monthlyShitIncome = dailyShitIncome * workingDaysPerMonth;
    yearlyShitIncome = dailyShitIncome * workingDaysPerYear;
    calculationComplete = true;
  }
</script>

<svelte:head>
  <title>Shitcalc - Calculating shitty passive income.</title>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JNDJ783K9C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-JNDJ783K9C');
  </script>
</svelte:head>

<main class="svg-bg">
  <div class="center">
    <h1 class="pt-6 font-medium text-2xl text-gray-100">Shitcalc.com</h1>
    <p class="text-gray-100 mt-4">After much demand, it's finally here!</p>
    <form class="mt-6">
      <p class="text-gray-100">Yearly Salary</p>
      <label>
        <input
          class="w-64"
          type="range"
          bind:value={income}
          min="400000"
          max="1000000"
          step="25000"
        />
        <p class="text-gray-100">{income}</p>
      </label>
      <p class="mt-8 text-gray-100">Shits per day</p>
      <select selected class="w-64 h-8 rounded-lg" bind:value={shitsTakenPerDay}>
        {#each shitsPerDay as shits}
          <option value={shits}>
            {shits}
          </option>
        {/each}
      </select>
      <p class="mt-8 text-gray-100">Length of visit (minutes)</p>
      <input
        class="w-64 rounded-lg h-8 font-medium px-2"
        type="text"
        placeholder="  10, 15, 20, 25?"
        bind:value={timeItTakesToShit}
      />
      {#if isNaN(timeItTakesToShit)}
        <p class="text-red-300 text-2xl">Please enter a number</p>
      {/if}
    </form>
    {#if !isNaN(timeItTakesToShit)}
      <button class="bg-yellow-200 my-8 p-4 rounded-lg" on:click={calculateMoneyMadeWhileShitting}>
        Calculate
      </button>

      {#if calculationComplete}
        <p class="text-gray-100 text-xl">
          Daily Shit Income {Math.round(dailyShitIncome)}kr
        </p>
        <p class="text-gray-100 text-xl">
          Monthly Shit Income {Math.round(monthlyShitIncome)}kr
        </p>
        <p class="text-gray-100 text-xl">
          Yearly Shit Income {Math.round(yearlyShitIncome)}kr
        </p>
      {/if}
    {/if}
  </div>
  <div class="center text-gray-100 bottom-0">
    <a href="https://kubes.no">by kubes.no</a>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background-color: #330000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
  }
  .center {
    margin: auto;
    text-align: center;
    margin-top: 20px;
  }
</style>
