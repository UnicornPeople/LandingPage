import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import Forms from "./pages/forms/Forms";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    console.log(currentUrl);
    if(currentUrl.host.startsWith("unicornpeople.github.io")) {
      window.location.href = "https://www.skillcoach.co.kr"
    }

  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/forms/:name' element={<Forms />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
