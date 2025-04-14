import React from "react";
import Image from "next/image";
import styles from "@/styles/hero.module.scss";
import mapImage from "@/assets/images/mapIllustration.png";
import apartmentImage from "@/assets/images/apartments/apartmentThree.png";
import PropertyCard from "./ui/PropertyCard";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["welcome-wrapper"]}>
        <div className={styles["welcome-background"]}></div>
        <div className={styles["welcome-container"]}>
          <div className={`${styles.welcome}`}>
            <h1 className={styles["welcome__heading"]}>
              Buy, rent, or sell your property easily
            </h1>
            <p className={styles["welcome__info"]}>
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
            <div className={styles["stats-info"]}>
              <ul className={styles["stats-info__item-list"]}>
                <li className={styles["stats-info__item"]}>
                  <span className={styles["stats-info__number"]}>50k+</span>
                  <span className={styles["stats-info__name"]}>renters</span>
                </li>
                <li className={styles["stats-info__item"]}>
                  <span className={styles["stats-info__number"]}>10k+</span>
                  <span className={styles["stats-info__name"]}>properties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["show-case-wrapper"]}>
        <div className={`${styles["show-case"]}`}>
          <PropertyCard
            type="showcase"
            propertyType="House"
            image={apartmentImage}
            price={2700}
            billingPeriod="month"
            name="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
          />
          <div className={`${styles["show-case__image-container"]}`}>
            <Image
              src={mapImage}
              className={`${styles["show-case__image"]}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="property-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
