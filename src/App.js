import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article className="prose">
            <h1>Hello, <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{window.ua.browser.name}</span></h1>
            <p>Browser: <code>{window.ua.browser.name} {window.ua.browser.version}</code></p>
            <p>Operating System: <code>{window.ua.os.name} {window.ua.os.version}</code></p>
            <p>Engine: <code>{window.ua.engine.name} {window.ua.engine.version}</code></p>
            <p>IP: <code className="ip"></code></p>
            <p>Language: <code className="ip">{navigator.language}</code></p>
            <p>TLS Version: <code className="tls"></code></p>
            <p>HTTP Version: <code className="http"></code></p>
            <p>Country Code: <code className="loc"></code></p>
            <p>SNI Encrypted: <code className="sni"></code></p>
        </article>
      </header>
    </div>
  );
}

export default App;