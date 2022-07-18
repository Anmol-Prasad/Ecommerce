import { Images, BannerImg, BannerImgMobile, carousel } from "../Data/Data";

export const ImageData = [
  { url: Images.Burger, text: "Burgers" },
  { url: Images.Pizza, text: "Pizza" },
  { url: Images.Icecream, text: "Icecream" },
  { url: Images.Sandwich, text: "Sandwich" },
  { url: Images.Shakes, text: "Shakes" },
  { url: Images.Pastry, text: "Pastry" },
];

export const BannerData = [
  { url: BannerImg.Banner1 },
  { url: BannerImg.Banner2 },
  { url: BannerImg.Banner3 },
];

export const BannerDataMob = [
  { url: BannerImgMobile.BannerMob1 },
  { url: BannerImgMobile.BannerMob2 },
  { url: BannerImgMobile.BannerMob3 },
];

export const products = [
  {
    id: "product1",
    url: carousel.Img1,
    title: "Home & Kitchen",
    mrp: 1195,
    cost: 625,
    discount: "47%",
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: carousel.Img2,
    title: "Sandwich Makers",
    mrp: 1499,
    cost: 899,
    discount: "40%",
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    tagline: "Pestige, Nova & more",
  },
  {
    id: "product3",
    url: carousel.Img3,
    title: "Fitness Gear",
    mrp: 499,
    cost: 166,
    discount: "66%",
    description:
      "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
    tagline: "Deal of the Day",
  },
  {
    id: "product4",
    url: carousel.Img4,
    title: "Smart Watches",
    mrp: 6999,
    cost: 4049,
    discount: "42%",
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    tagline: "Best Seller",
  },
  {
    id: "product5",
    url: carousel.Img5,
    title: "Trimmers, Dryers & more",
    mrp: 1899,
    cost: 1124,
    discount: "40%",
    description: "",
    tagline: "Kubra, Nova & more",
  },
];
