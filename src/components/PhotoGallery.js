// MODULES //
import React from "react";

// COMPONENTS //
import Link from "next/link";

// STYLES //
import styles from "@/styles/gallery.module.scss";

/** Component to display photos */
const PhotoGallery = ({ photos }) => {
  return (
    <div className={styles.gallery_wrap}>
      {photos.map((photo, index) => (
        <Link
          href={photo.url}
          target="_blank"
          key={index}
          className={styles.link_wrap}
        >
          <div className={styles.photo_wrap}>
            <img key={photo.id} src={photo.url} alt={photo.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoGallery;
