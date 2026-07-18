    export default function App() {
      return (
        <div>
          <h1>Production Testing</h1>
          {/* Vite exposes environment variables prefixed with VITE_ via import.meta.env */}
          <p>Secret Value: {import.meta.env.VITE_MY_SECRET || "Not Found"}</p>
        </div>
      )
    }                                                                                                
