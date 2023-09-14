"use client";
import Image from "next/image";
import styles from "@/styles/home.module.scss";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PhotoGallery from "../components/PhotoGallery";
import { searchPhotos } from "../utils/api";

export default function Home() {
  const [photos, setPhotos] = useState([]);

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
