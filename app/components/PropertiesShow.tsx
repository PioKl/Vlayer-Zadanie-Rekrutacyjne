"use client";
import { useState } from "react";
import styles from "@/styles/propertiesShow.module.scss";
import Button from "./ui/Button";
import buttonStyles from "@/styles/ui/button.module.scss";
import properties from "@/data/properties.json";
import { PropertiesInterface } from "@/interfaces/interfaces";
import PropertiesCards from "./ui/PropertiesCards";

export default function PropertiesShow() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const allProperties = properties as PropertiesInterface[];

  return (
    <section className={`wrapper ${styles.properties}`}>
      <div className={styles["properties-intro"]}>
        <div className={styles["properties-buttons"]}>
          {allProperties.map((property) => (
            <Button
              key={property.id}
              buttonType="tab"
              text={property.type}
              isALink={false}
              onClick={() => handleTabClick(property.id)}
              className={`${buttonStyles["--tab"]} ${
                activeTab === property.id
                  ? buttonStyles["--tab-active"]
                  : buttonStyles["--tab-inactive"]
              }`}
            />
          ))}
        </div>
        <h2 className={styles["properties-intro__heading"]}>
          We make it easy for houses and apartments.
        </h2>
        <p className={styles["properties-intro__info"]}>
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <PropertiesCards activeTab={activeTab} allProperties={allProperties} />
    </section>
  );
}
