import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/gallery.module.scss";

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
