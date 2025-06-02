import { motion } from "framer-motion";
import Footer from "./footer/Footer";
import { Heart, ArrowRight } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import harsi_tun_image from "./images/location/harsi_tun.jpg";
import church_image from "./images/location/church_image.jpg";
import restaurant_image from "./images/location/restaurant_image.jpg";
import "./App.css";
import "react-international-phone/style.css";

const WeddingInvitation = () => {
  const weddingDate = new Date(2025, 5, 12);
  const monthNames = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];
  const daysInMonth = new Date(2025, 6, 0).getDate();
  const firstDayOfMonth = new Date(2025, 5, 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="calendar-day empty"></div>
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isWeddingDay = i === 12;
    calendarDays.push(
      <div
        key={`day-${i}`}
        className={`calendar-day ${isWeddingDay ? "wedding-day" : ""}`}
      >
        {i}
        {isWeddingDay && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="wedding-heart"
          >
            <Heart size={16} />
          </motion.div>
        )}
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  const sliderImages = [slider1, slider2, slider3];

  // Wedding locations data
  const locations = [
    {
      title: "Հարսի տուն",
      image: harsi_tun_image,
      time: "12:00 PM",
      mapLink: "https://maps.google.com?q=Sunset+Gardens+123+Beautiful+Avenue",
    },
    {
      title: "Փեսայի տուն",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      time: "13:00 PM",
      mapLink: "https://maps.google.com?q=Sunset+Gardens+123+Beautiful+Avenue",
    },
    {
      title: "Սուրբ Հովհաննես եկեղեցի",
      description: "Հասցե։ ք. Աբովյան",
      image: church_image,
      time: "16:00",
      mapLink: "https://maps.google.com?q=The+Lounge+456+Main+Street",
    },
    {
      title: "Բագինյա Հոլլ",
      description: "Հասցե։ գ. Հովտաշատ, Գայի խճուղի",
      image: restaurant_image,
      time: "18:00",
      mapLink: "https://maps.google.com?q=The+Lounge+456+Main+Street",
    },
  ];

  return (
    <div className="app">
      <div className="wrapper">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="header"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ display: "inline-block" }}
          >
            <Heart className="heart-icon" size={36} />
          </motion.div>
          <h1>Tigran & Ani</h1>
          <p className="subtitle">Մենք ամուսնանում ենք!</p>
        </motion.header>

        {/* Hero Slider */}
        <motion.section
          className="hero-slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </motion.section>

        {/* Save the Date Section */}
        <motion.section
          className="save-the-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2>Հունիս 12, 2025</h2>

          {/* Calendar Component */}
          <div className="calendar-container">
            <div className="calendar-header">
              {monthNames[weddingDate.getMonth()]} {weddingDate.getFullYear()}
            </div>
            <div className="calendar-weekdays">
              <div>Կիր</div>
              <div>Երկ</div>
              <div>Երք</div>
              <div>Չրք</div>
              <div>Հնգ</div>
              <div>Ուրբ</div>
              <div>Շաբ</div>
            </div>
            <div className="calendar-grid">{calendarDays}</div>
          </div>
        </motion.section>

        {/* Couple Background Section */}
        <section className="couple-background">
          <div className="couple-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="couple-names"
            >
              <h2>Tigran</h2>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Heart size={48} className="heart-icon" />
              </motion.div>
              <h2>Ani</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="couple-quote"
            >
              "Միասին 2020 թվականից"
            </motion.p>
          </div>
        </section>

        {/* Locations Section */}
        <section className="locations-section">
          <h2>Օրվա ծրագիր</h2>
          <div className="locations-container">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="location-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="location-image">
                  <img src={location.image} alt={location.title} />
                </div>
                <div className="location-content">
                  <h5>{location.title}</h5>
                  <p className="location-time">{location.time}</p>
                  <p className="location-description">
                    {location?.description}
                  </p>
                  <motion.a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Տեսնել քարտեզի վրա <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <p>
            Մենք անհամբեր սպասում ենք ձեզ հետ տոնելուն{" "}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ display: "inline-block" }}
            >
              <Heart className="heart-icon" size={20} />
            </motion.div>
          </p>
        </motion.footer>
      </div>

      <Footer />
    </div>
  );
};

export default WeddingInvitation;
