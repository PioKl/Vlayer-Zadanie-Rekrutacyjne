"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "@/styles/testimonials.module.scss";
import Image from "next/image";
import customersData from "@/data/customers.json";
import { CustomersInterface } from "@/interfaces/interfaces";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  //ewentualnie useEffect z fetch jeśli z api
  const customers = customersData as CustomersInterface[];

  const numberOfCustomersToShow = customers.slice(0, 3);

  const customersId = numberOfCustomersToShow.map((item) => item.id);

  const [currentCustomer, setCurrentCustomer] = useState(0);

  useEffect(() => {
    if (customersId.length === 0) return;

    const interval = setInterval(() => {
      setCurrentCustomer((prevCustomer) => {
        if (prevCustomer + 1 >= customersId.length) {
          return 0;
        } else {
          return prevCustomer + 1;
        }
      });
    }, 10000); //10s

    return () => clearInterval(interval);
  }, [customersId.length]);

  return (
    <>
      {numberOfCustomersToShow.length > 0 && (
        <section className={`${styles.testimonials}`}>
          <div className={`wrapper ${styles["testimonials-wrapper"]}`}>
            <motion.div
              className={styles["testimonials-intro"]}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: "-.5%", y: "25%" }}
              whileInView={{
                x: "0",
                y: "0",
                opacity: 1,
                transition: { duration: 0.75, ease: "easeOut" },
              }}
            >
              <h2 className={styles["testimonials-intro__heading"]}>
                Testimonials
              </h2>
              <p className={styles["testimonials-intro__info"]}>
                See what our property managers, landlords, and tenants have to
                say
              </p>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCustomer}
                className={styles["testimonials-details"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              >
                <p className={styles["testimonials-details__opinion"]}>
                  {numberOfCustomersToShow[currentCustomer].opinion}
                </p>
                <div className={styles["testimonials-details__name-container"]}>
                  <span className={styles["testimonials-details__name"]}>
                    {numberOfCustomersToShow[currentCustomer].name}
                  </span>
                  <span className={styles["testimonials-details__profession"]}>
                    , {numberOfCustomersToShow[currentCustomer].profession}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className={styles["testimonials-customers"]}>
              <ul className={styles["testimonials-customers__items-list"]}>
                {numberOfCustomersToShow.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles["testimonials-customers__item"]} ${
                      item.id === currentCustomer && styles["--active"]
                    }`}
                  >
                    <Image
                      src={item.avatarImage}
                      alt="Avatar"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      priority={true}
                      className={styles["testimonials-customers__image"]}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
