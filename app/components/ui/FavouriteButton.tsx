import FavouriteIcon from "@/assets/icons/favourite.svg";
import styles from "@/styles/ui/favouriteButton.module.scss";

export default function FavouriteButton() {
  const handleAddToFavourite = () => {
    console.log("Imitacja dodania do ulubionych");
  };
  return (
    <button
      aria-label="Add to favourites"
      className={styles["favourite-button"]}
      onClick={handleAddToFavourite}
    >
      <FavouriteIcon className={styles["favourite-button__icon"]} />
    </button>
  );
}
