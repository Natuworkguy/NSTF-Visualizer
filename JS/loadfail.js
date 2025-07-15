function presentLoadFail(packagename, url, disc = 'Package') {
    document.body.innerHTML = `
      <div style="
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #121212;
        color: #FF5555;
        text-align: center;
      ">
        <h1 style="font-size: 3em;">${disc} Load Failure</h1>
        <p style="font-size: 1.5em;">Failed to load <code>${packagename}</code></p>
        <p style="margin-top: 1em;">Check your network connection or verify the script path.</p>
        <code style="background: #222; padding: 0.5em 1em; border-radius: 5px;">
          <span style="color:#aaa;">GET</span> <a href="${url}" style="color:#0af;">${url}</a>
        </code>
      </div>
    `;
}
