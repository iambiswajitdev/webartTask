import logoImg from "../assets/images/logo.png";
import appleImg from "../assets/images/applewatch.jpg";
import lgImg from "../assets/images/lg.jpg";
import adidasImg from "../assets/images/adidas.jpg";
import boatImg from "../assets/images/boat.jpg";
import nikeImg from "../assets/images/nikejpeg.jpeg";
import oppoImg from "../assets/images/oppo.png";
// all Images section
export const logo = logoImg;
const brand1 = appleImg;
const brand2 = lgImg;
const brand3 = adidasImg;
const brand4 = boatImg;
const brand5 = nikeImg;
const brand6 = oppoImg;

// topBar Section
export const topManuList = [
  { manu: "blog" },
  { manu: "contact us" },
  { manu: "My account" },
  { manu: "sign in / register", icon: <i class="fas fa-user"></i> },
];
// Header Section
export const headerManu = [
  { manu: "wishlist", icon: <i class="far fa-heart"></i> },
  { manu: "compare", icon: <i class="far fa-bookmark"></i> },
];

// navigation Section
export const navigationItem = [
  { manu: "home", route: "/" },
  { manu: "shop", route: "/shop" },
  { manu: "vandor", route: "/" },
  { manu: "best sellers", route: "/" },
  { manu: "customer service", route: "/" },
];

// home slider banner
export const bannerImg = [
  {
    img: "https://image.freepik.com/free-vector/season-sale_62951-24.jpg",
  },
  {
    img: "https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg",
  },
  {
    img: "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-online-gradient-banner-poster-image_13908.jpg",
  },
];

// home features Section
export const features = [
  {
    icon: <i class="fas fa-shipping-fast"></i>,
    title: "free shipping and returns",
    decrib: "for all orders over $80",
  },
  {
    icon: <i class="fas fa-briefcase"></i>,
    title: "secure payment",
    decrib: "we ensure secure payment",
  },
  {
    icon: <i class="fas fa-wallet"></i>,
    title: "money back guarantee",
    decrib: "any back within 30days",
  },
  {
    icon: <i class="fas fa-comments"></i>,
    title: "all time customer support",
    decrib: "call or email us 24/7",
  },
];

// home brand section
export const homeBrand = [
  {
    img: brand1,
    title: "apple",
  },
  {
    img: brand2,
    title: "lg",
  },
  {
    img: brand3,
    title: "adidas",
  },
  {
    img: brand4,
    title: "boat",
  },
  {
    img: brand5,
    title: "nike",
  },
  {
    img: brand6,
    title: "oppo",
  },
];

// all icon section
export const searchIcon = <i class="fas fa-search"></i>;
export const phoneIcon = <i class="fas fa-phone-alt"></i>;
export const locationIcon = <i class="fas fa-map-marker-alt"></i>;
export const dailsIcon = <i class="fas fa-tag"></i>;
export const righitIcon = <i class="fas fa-arrow-right"></i>;
