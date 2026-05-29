import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums } from "./components/api/api";
import Section from "./components/Sections/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      if (Array.isArray(data)) {
        setTopAlbumData(data);
      }
    } catch (err) {
      console.error("Failed to fetch albums:", err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="sectionWrapper">
        {topAlbumData.length > 0 && (
          <Section type="album" title="Top Albums" data={topAlbumData} />
        )}
      </div>
    </div>
  );
}

export default App;