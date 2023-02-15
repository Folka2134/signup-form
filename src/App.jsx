import "./App.css";

function App() {
  return (
    <div className="App h-screen bg-[#ff686b] bg-[url('./assets/bg-intro-desktop.png')] w-screen p-12">
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div>
          <p>Try it free 7 days then $20/mo. thereafter</p>
        </div>
        <div>
          <form className="flex flex-col justify-evenly h-[500px] p-6 bg-white rounded-lg shadow-2xl">
            <input
              className="p-3 border-2 border-gray-200"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
            />
            <input
              className="p-3 border-2 border-gray-200"
              type="text"
              name="second-name"
              id="second-name"
              placeholder="Second Name"
            />
            <input
              className="p-3 border-2 border-gray-200"
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Email Address"
            />
            <input
              className="p-3 border-2 border-gray-200"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input type="submit" value="CLAIM YOUR FREE TRAIL" />
            <p>
              By clicking the button, you are agreeing to our Terms and Services
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
