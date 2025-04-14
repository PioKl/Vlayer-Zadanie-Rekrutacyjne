"use client";
import { useState } from "react";
import styles from "@/styles/propertiesShow.module.scss";
import Button from "./ui/Button";
import buttonStyles from "@/styles/ui/button.module.scss";
import properties from "@/data/properties.json";
import { PropertiesInterface } from "@/interfaces/interfaces";
import PropertiesCards from "./ui/PropertiesCards";
import { motion } from "framer-motion";

export default function PropertiesShow() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  //ewentualnie useEffect z fetch jeśli z api
  const allProperties = properties as PropertiesInterface[];

  return (
    <section className={`wrapper ${styles.properties}`}>
      <div className={styles["properties-intro"]}>
        <motion.div
          className={styles["properties-buttons"]}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.75, ease: "easeOut" },
          }}
        >
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
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: "-2%", y: "25%" }}
          whileInView={{
            x: "0",
            y: "0",
            opacity: 1,
            transition: { duration: 0.75, ease: "easeOut" },
          }}
        >
          <h2 className={styles["properties-intro__heading"]}>
            We make it easy for houses and apartments.
          </h2>
          <p className={styles["properties-intro__info"]}>
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </p>
        </motion.div>
      </div>
      <PropertiesCards activeTab={activeTab} allProperties={allProperties} />
    </section>
  );
}
