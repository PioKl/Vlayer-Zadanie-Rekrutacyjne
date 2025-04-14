import { PropertiesCardsInterface } from "@/interfaces/interfaces";
import PropertyCard from "./PropertyCard";
import styles from "@/styles/ui/propertiesCards.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";

export default function PropertiesCards({
  activeTab,
  allProperties,
}: PropertiesCardsInterface) {
  return (
    <div className={`${styles["properties"]}`}>
      <div className={`${styles["properties__swiper-container"]}`}>
        <div className={styles["properties__items-list"]}>
          <Swiper
            grabCursor={true}
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              500: {
                slidesPerView: 1.2,
              },
              550: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 1.8,
              },
              768: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
              1110: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1441: {
                slidesPerView: 3,
              },
            }}
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {allProperties[activeTab]?.properties.map((item, index) => (
              <SwiperSlide key={index}>
                <PropertyCard
                  key={index}
                  type="favourite"
                  propertyType={item.propertyType}
                  image={item.image}
                  price={item.price}
                  billingPeriod={item.billingPeriod}
                  name={item.name}
                  address={item.address}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
