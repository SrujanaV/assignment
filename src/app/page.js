"use client";
// MODULES //
import { useState, useEffect } from "react";

// STYLES //
import styles from "@/styles/home.module.scss";

// COMPONENTS //
import SearchForm from "../components/SearchForm";
import PhotoGallery from "../components/PhotoGallery";

// API //
import { searchPhotos } from "../utils/api";

/**Home Page */
export default function Home() {
  /** State to set images returned from API */
  const [photos, setPhotos] = useState([]);

  /** Method to get data as soon as page loads */
  useEffect(() => {
    document.getElementById("search_btn").click();
  }, []);

  /** Function to fetch Data from API */
  const handleSearch = async ({ searchTerm, category }) => {
    try {
      const result = await searchPhotos({ searchTerm, category });
      setPhotos(result);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Photo Gallery</h1>
      <SearchForm onSubmit={handleSearch} />
      <PhotoGallery photos={photos} />
    </main>
  );
}
