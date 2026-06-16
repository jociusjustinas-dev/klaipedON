import "./styles.css";
import { createIcons, Accessibility, ArrowLeft, ArrowRight, Bike, Bus, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, CloudUpload, Copy, Filter, Globe, Languages, Mail, MapPin, PawPrint, Phone, Route, Search, Send, Share2, Ship, SlidersHorizontal, Star, Ticket, TrainFront } from "lucide";
import { initSiteUI } from "./scripts/site-ui.js";
import eventAludariai from "./assets/event-aludariai.png";
import eventBiplan from "./assets/event-biplan.png";
import eventGodo from "./assets/event-godo.png";
import eventJurosSvente from "./assets/event-juros-svente.png";
import eventKamaniuSilelis from "./assets/event-kamaniu-silelis.png";
import footerRibbon from "./assets/footer-ribbon.png";
import heroBg from "./assets/hero-bg.png";
import brandLogo from "./assets/klaipedaON.svg";
import citySeal from "./assets/city-seal.svg";
import logoBooking from "./assets/logo-booking.svg";
import logoTripadvisor from "./assets/logo-tripadvisor.svg";
import attractionsTop from "./assets/attractions-top.png";
import homeGuideActivity from "./assets/home-guide-activity.webp";
import homeGuideFood from "./assets/home-guide-food.webp";
import homeGuideStay from "./assets/home-guide-stay.webp";
import homeNewsRoute from "./assets/home-news-route.webp";
import homeNewsPort from "./assets/home-news-port.webp";
import homeNewsCity from "./assets/home-news-city.webp";
import newsHeroBeach from "./assets/news-hero-beach.webp";
import newsCardHeritage from "./assets/news-card-heritage.webp";
import newsCardDunes from "./assets/news-card-dunes.webp";
import newsCardPattern from "./assets/news-card-pattern.webp";
import newsCardStage from "./assets/news-card-stage.webp";
import newsCardLogo from "./assets/news-card-logo.webp";
import newsCardMuseum from "./assets/news-card-museum.webp";
import newsDetailCarmina from "./assets/news-detail-carmina.webp";
import exhibitionDomsaitis from "./assets/exhibition-domsaitis.webp";
import exhibitionMedziai from "./assets/exhibition-medziai.webp";
import exhibitionSpalva from "./assets/exhibition-spalva.webp";

const assetMap = {
  "attractions-top": attractionsTop,
  "city-seal": citySeal,
  "event-aludariai": eventAludariai,
  "event-biplan": eventBiplan,
  "event-godo": eventGodo,
  "event-juros-svente": eventJurosSvente,
  "event-kamaniu-silelis": eventKamaniuSilelis,
  "exhibition-domsaitis": exhibitionDomsaitis,
  "exhibition-medziai": exhibitionMedziai,
  "exhibition-spalva": exhibitionSpalva,
  "footer-ribbon": footerRibbon,
  "hero-bg": heroBg,
  "info-panel-image": heroBg,
  "logo-footer": brandLogo,
  "logo-header": brandLogo,
  "logo-booking": logoBooking,
  "logo-tripadvisor": logoTripadvisor,
  "home-guide-activity": homeGuideActivity,
  "home-guide-food": homeGuideFood,
  "home-guide-stay": homeGuideStay,
  "home-news-route": homeNewsRoute,
  "home-news-port": homeNewsPort,
  "home-news-city": homeNewsCity,
  "news-hero-beach": newsHeroBeach,
  "news-card-heritage": newsCardHeritage,
  "news-card-dunes": newsCardDunes,
  "news-card-pattern": newsCardPattern,
  "news-card-stage": newsCardStage,
  "news-card-logo": newsCardLogo,
  "news-card-museum": newsCardMuseum,
  "news-detail-carmina": newsDetailCarmina,
};

document.querySelectorAll("[data-asset]").forEach((element) => {
  const assetKey = element.getAttribute("data-asset");
  const assetValue = assetMap[assetKey];

  if (assetValue) {
    element.setAttribute("src", assetValue);
  }
});

initSiteUI();

createIcons({
  icons: {
    Accessibility,
    ArrowLeft,
    ArrowRight,
    Bike,
    Bus,
    CalendarDays,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    CloudUpload,
    Copy,
    Filter,
    Globe,
    Languages,
    Mail,
    MapPin,
    PawPrint,
    Phone,
    Route,
    Search,
    Send,
    Share2,
    Ship,
    SlidersHorizontal,
    Star,
    Ticket,
    TrainFront,
  },
  attrs: {
    "aria-hidden": "true",
    "stroke-width": 1.8,
  },
});
