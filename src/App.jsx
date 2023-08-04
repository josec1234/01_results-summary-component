function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pale-blue">
      <article className="flex h-auto w-96 rounded-3xl bg-white">
        <section className="flex justify-between w-1/2 flex-col p-8 items-center gap-4 rounded-3xl bg-gradient-to-b from-slate-blue-light to-slate-blue-dark">
          <div className="text-pale-blue">Your Results</div>
          <div className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-b from-violet-blue to-slate-blue-dark">
            <span className="text-4xl font-semibold text-white">76</span>
            <span className="text-xs text-gray-400">of 100</span>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-white">Great</h3>
            <p className="text-center text-xs text-pale-blue">
              You scored highter than 65% of the people who have taken these test.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-between p-4 w-1/2">
          <h3 className="font-bold">Summary</h3>
          <ul className="flex flex-col space-y-2">
            <li className="flex justify-between p-2 rounded-lg font-semibold bg-light-red-bg">
              <img src="../src/assets/images/icon-reaction.svg" alt="a" />
              <h3 className="text-light-red">Reaction</h3>
              <div>
                <span>80</span>
                <span className="text-xs text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between p-2 rounded-lg font-semibold bg-orange-yellow-bg">
              <img src="../src/assets/images/icon-memory.svg" alt="a" />
              <h3 className="text-orange-yellow">Memory</h3>
              <div>
                <span>92</span>
                <span className="text-xs text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between p-2 rounded-lg font-semibold bg-green-teal-bg">
              <img src="../src/assets/images/icon-verbal.svg" alt="a" />
              <h3 className="text-green-teal">Verbal</h3>
              <div>
                <span>61</span>
                <span className="text-xs text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between p-2 rounded-lg font-semibold bg-cobalt-blue-bg">
              <img src="../src/assets/images/icon-visual.svg" alt="a" />
              <h3 className="text-cobalt-blue">Visual</h3>
              <div>
                <span>72</span>
                <span className="text-xs text-gray-400"> / 100</span>
              </div>
            </li>
          </ul>
          <button className="text-pale-blue bg-dark-gray-blue rounded-3xl px-100% w-full py-2">Continue</button>
        </section>
          
      </article>


    </main>
  )
}

export default App
