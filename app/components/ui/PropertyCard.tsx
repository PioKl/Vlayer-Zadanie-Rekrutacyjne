"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/ui/propertyCard.module.scss";
import { PropertyCardInterface } from "@/interfaces/interfaces";
import { dolarPriceFormating } from "@/utils/formattingFunctions";
import StarsIcon from "@/assets/icons/stars.svg";
import FavouriteButton from "./FavouriteButton";

export default function PropertyCard({
  type,
  propertyType,
  image,
  price,
  billingPeriod,
  name,
  address,
}: PropertyCardInterface) {
  return (
    <div className={`${styles["property-card"]} ${styles[`--${type}`]}`}>
      <div className={styles["property-card__image-container"]}>
        {type === "favourite" && (
          <div className={styles["property-card__property-type-container"]}>
            <StarsIcon className={styles["property-card__stars-icon"]} />
            <span className={styles["property-card__property-type"]}>
              {propertyType}
            </span>
          </div>
        )}

        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="property-image"
        />
      </div>
      <div
        className={`${styles["property-card__info"]} ${styles[`--${type}`]}`}
      >
        <div
          className={`${styles["property-card__price-container"]} ${
            styles[`--${type}`]
          }`}
        >
          <span
            className={`${styles["property-card__price"]} ${
              styles[`--${type}`]
            }`}
          >
            ${dolarPriceFormating(price)}
          </span>
          <span
            className={`${styles["property-card__billing-period"]} ${
              styles[`--${type}`]
            }`}
          >
            /{billingPeriod}
          </span>
        </div>
        <h3
          className={`${styles["property-card__name"]} ${styles[`--${type}`]}`}
        >
          {name}
        </h3>
        <span
          className={`${styles["property-card__address"]} ${
            styles[`--${type}`]
          }`}
        >
          {address}
        </span>
        {type === "favourite" && <FavouriteButton />}
      </div>
    </div>
  );
}
