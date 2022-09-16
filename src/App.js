import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article className="prose">
            <h1>Hello, <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{window.ua.browser.name}</span></h1>
            <hr style={{'marginTop': '10px', 'marginBottom': '10px'}}></hr>
            <p>Browser: <code>{window.ua.browser.name} {window.ua.browser.version}</code></p>
            <p>Operating System: <code>{window.ua.os.name} {window.ua.os.version}</code></p>
            <p>Engine: <code>{window.ua.engine.name} {window.ua.engine.version}</code></p>
            <p>Screen Size: <code>{window.screen.width} x {window.screen.height}</code></p>
            <p>Language: <code className="lang">{navigator.language}</code></p>
            <hr style={{'marginTop': '10px', 'marginBottom': '10px'}}></hr>
            <p>IP: <code className="ip"></code></p>
            <p>Country Code: <code className="loc"></code></p>
            <p>TLS Version: <code className="tls"></code></p>
            <p>HTTP Version: <code className="http"></code></p>
            <p>SNI Encrypted: <code className="sni"></code></p>
            {/* <hr style={{'marginTop': '10px', 'marginBottom': '10px'}}></hr>
            <p>Continent: <code className="continent"></code></p>
            <p>Country: <code className="country"></code></p>
            <p>State: <code className="state"></code></p>
            <p>City: <code className="city"></code></p>
            <p>Time Zone: <code className="time_zone"></code></p>
            <p>ISP: <code className="isp"></code></p>
            <p>Network Type: <code className="user_type"></code></p> */}
        </article>
      </header>
    </div>
  );
}

export default App;
