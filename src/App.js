import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./components/api/api";
import Section from "./components/Sections/Section";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then((data) => {
      if (Array.isArray(data)) setTopAlbumData(data);
    });
    fetchNewAlbums().then((data) => {
      if (Array.isArray(data)) setNewAlbumData(data);
    });
    fetchSongs().then((data) => {
      if (Array.isArray(data)) setSongsData(data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="sectionWrapper">
        {topAlbumData.length > 0 && (
          <Section type="album" title="Top Albums" data={topAlbumData} />
        )}
        {newAlbumData.length > 0 && (
          <Section type="album" title="New Albums" data={newAlbumData} />
        )}
        {songsData.length > 0 && (
          <Section type="song" title="Songs" data={songsData} />
        )}
      </div>
    </div>
  );
}

export default App;