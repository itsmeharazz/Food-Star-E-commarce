// banner
import logo from "./Logo.png";
import coming_soon from "./offer coming soon.png";
import eid_offer from "./Eid offer.jpg";

// cover images
import cover from "./Cover banner.png";
import cover_1 from './Cover-1.png';
import cover_2 from './Cover-2.png';
import cover_3 from './Cover-3.png';
import cover_4 from './Cover-4.png';
import cover_5 from './Cover-5.png';
import cover_6 from './Cover-6.png';

// Upcoming products
import coming_1 from './Grocery-1.png';
import coming_2 from './Grocery-2.png';
import coming_3 from './Grocery-3.png';
import coming_4 from './Grocery-4.png';
import coming_5 from './Grocery-5.png';

// category images
import tools from "./Baking Tools.png";
import cake_category from "./Cake and Decoration categoty.png";
import dairy_category from "./Dairy-categoty.png";
import fish_category from "./fish-categoty.png";
import beverage_category from "./Food and beverage-categoty.png";
import herbal_category from "./herbal-categoty.png";
import mix_masala_category from "./mix-masala-categoty.png";
import nut_category from "./nut-category.png";
import seed_category from "./seed-categoty.png";
import spice from "./Spices categorypng.png";
import party_category from "./Party-categoty.png";
// product images

// nuts products
import almond from "./ALMOND.png";
import cashewnut from "./CASHEWNUT.png";
import mix_nut from "./mix-nut.png";
import hazelnut from "./Hazelnut.png";
import pistachio from "./PISTACHIO.png";
import walnut from "./WALNUT.png";
import peanut from "./PEANUT-LARGE.png";
// seed products
import chia_seed from "./chia-seeds.png";
// Herbal products
import fenugreek from "./fenugreek-leaves.png";
// Fish products
import flash from "./Flash sale.png";
// mix masal products
import curry_powder from "./curry-powder.png";
import kala_bhuna from "./Kala bhuna Masala .png";
import kashmiri_chili from "./kashmiri-mirch-red-chilli-powder.png";
import malasa from "./Masala mix.png";
import nihari from "./Nihari.png";
import birani_masala from "./shan-biryani-masal.png";
import chat_masala from "./Shan-chaat.png";
import beef_biriyani from "./shan-karachi-beef-biriyani-60-gm.png";
import seekh_kabab from "./shan-seekh-kabab.png";
import bombay_biriyani from "./Shan-Special-Bombay-Biryani-Masa.png";
import tandoori_masala from "./Shan-Tandoori-Masala.png";
import boti_kabab from "./shan-tikka(BOti Kabab).png";

// Others image
export const assets = {
  logo,
  coming_soon,
  eid_offer,
};
// cover image
export const coverImage = {
  cover,
  cover_1,
  cover_2,
  cover_3,
  cover_4,
  cover_5,
  cover_6,
};
// up coming image
export const upComing = [
  {
    img: coming_1,
    day:'10',
    hours:'23',
    minutes:'55',
    seconds:'35',
  },
  {
    img: coming_2,
    day:'10',
    hours:'23',
    minutes:'55',
    seconds:'35',
  },
  {
    img: coming_3,
    day:'10',
    hours:'23',
    minutes:'55',
    seconds:'35',
  },
  {
    img: coming_4,
    day:'10',
    hours:'23',
    minutes:'55',
    seconds:'35',
  },
  {
    img: coming_5,
    day:'10',
    hours:'23',
    minutes:'55',
    seconds:'35',
  },
];
// Category
export const category = [
  {
    image: nut_category,
    name: "Nuts",
  },
  {
    image: spice,
    name: "Spice Masala",
  },
  {
    image: mix_masala_category,
    name: "Mix Masala",
  },
  {
    image: beverage_category,
    name: "Food and Beverage",
  },
  {
    image: cake_category,
    name: "Cake Decoration",
  },
  {
    image: dairy_category,
    name: "Dray Fruits",
  },
  {
    image: herbal_category,
    name: "Natural Products ",
  },
  {
    image: seed_category,
    name: "Seeds",
  },
  {
    image: fish_category,
    name: "Fish ",
  },
  {
    image: tools,
    name: "Baking Tools",
  },
  {
    image: party_category,
    name: "Party Decoration",
  },
];
// Products
export const products = [
  {
    id: "1",
    name: "Almond",
    image: almond,
    price: 670,
    description:
      "Almonds are nutrient-rich, heart-healthy nuts with a crunchy texture and a naturally sweet flavor.",
    category: "Nuts",
  },
  {
    id: "2",
    name: "Cashew Nut",
    image: cashewnut,
    price: 670,
    description:
      "Cashew nuts are creamy, nutrient-rich nuts packed with healthy fats, protein, and essential minerals.",
    category: "Nuts",
  },
  {
    id: "3",
    name: "Mix Nut",
    image: mix_nut,
    price: 800,
    description:
      "Mix nuts are a crunchy, nutritious blend of almonds, cashews, walnuts, and other wholesome nuts, perfect for a healthy snack.",
    category: "Nuts",
  },
  {
    id: "4",
    name: "Hazel Nut",
    image: hazelnut,
    price: 1000,
    description:
      "Hazelnuts are rich, buttery-flavored nuts packed with healthy fats, fiber, and antioxidants.",
    category: "Nuts",
  },
  {
    id: "5",
    name: "Pistachio",
    image: pistachio,
    price: 1000,
    description:
      "Pistachios are crunchy, flavorful nuts packed with protein, healthy fats, and essential nutrients.",
    category: "Nuts",
  },
  {
    id: "6",
    name: "Wal nut",
    image: walnut,
    price: 1000,
    description:
      "Walnuts are brain-shaped nuts rich in omega-3 fatty acids, antioxidants, and essential nutrients.",
    category: "Nuts",
  },
  {
    id: "7",
    name: "Peanuts",
    image: peanut,
    price: 1000,
    description:
      "Peanuts are protein-rich, crunchy legumes packed with healthy fats and essential nutrients.",
    category: "Nuts",
  },
  //   Seed products
  {
    id: "8",
    name: "Chia Seed",
    image: chia_seed,
    price: 850,
    description:
      "Chia seeds are tiny, nutrient-dense seeds rich in fiber, omega-3s, and antioxidants.",
    category: "Seeds",
  },
  //   HHerbal products
  {
    id: "9",
    name: "Fenugreek leaves",
    image: fenugreek,
    price: 250,
    description:
      "Fenugreek leaves are aromatic, bitter greens used in cooking, rich in vitamins, minerals, and antioxidants.",
    category: "Natural Products",
  },
  //   Fish products
  {
    id: "10",
    name: "Tuna Fish",
    image: flash,
    price: 950,
    description:
      "Tuna fish is a lean, protein-rich fish known for its firm texture and mild, savory flavor.",
    category: "Fish",
  },
  //   Mix masala products
  {
    id: "11",
    name: "Curry Powder Masala",
    image: curry_powder,
    price: 200,
    description:
      "Curry powder is a flavorful spice blend made from turmeric, cumin, coriander, and other aromatic spices.",
    category: "Mix Masala ",
  },
  {
    id: "12",
    name: "Kala bhuna Masala ",
    image: kala_bhuna,
    price: 200,
    description:
      "Kala Bhuna is a rich, flavorful Bengali curry made with slow-cooked meat (often beef or mutton), spices, and a deep, aromatic sauce.",
    category: "Mix Masala ",
  },
  {
    id: "13",
    name: "Kashmiri Chili ",
    image: kashmiri_chili,
    price: 200,
    description:
      "Kashmiri chili is a mild, bright red chili variety known for its vibrant color and subtle, smoky heat, often used in Indian cuisine.",
    category: "Mix Masala ",
  },
  {
    id: "14",
    name: "Mix masala ",
    image: malasa,
    price: 200,
    description:
      "Masala mix is a blend of various ground spices, such as cumin, coriander, turmeric, and garam masala, used to add depth and flavor to Indian dishes.",
    category: "Mix Masala ",
  },
  {
    id: "15",
    name: "Nihari masala ",
    image: nihari,
    price: 200,
    description:
      "Nihari masala is a rich, aromatic spice mix used in making Nihari, a slow-cooked stew, typically consisting of meat, spices, and herbs.",
    category: "Mix Masala ",
  },
  {
    id: "16",
    name: "Biryani masala ",
    image: birani_masala,
    price: 200,
    description:
      "Biryani masala is a fragrant spice blend, typically containing cinnamon, cloves, cardamom, and other spices, used to flavor the rice and meat in biryani.",
    category: "Mix Masala ",
  },
  {
    id: "17",
    name: "Chat masala ",
    image: chat_masala,
    price: 100,
    description:
      "Chaat masala is a tangy, spicy seasoning blend made with ingredients like dried mango powder, cumin, black salt, and chili, commonly used in Indian street food.",
    category: "Mix Masala ",
  },
  {
    id: "18",
    name: "Beef Biryani masala ",
    image: beef_biriyani,
    price: 150,
    description:
      "Beef biryani is a flavorful and aromatic rice dish made with tender beef, basmati rice, and a blend of spices like cumin, cinnamon, and garam masala.",
    category: "Mix Masala ",
  },
  {
    id: "18",
    name: "Seekh Kabab masala ",
    image: seekh_kabab,
    price: 300,
    description:
      "Seekh kebab is a popular grilled dish made from minced meat, typically beef or chicken, mixed with spices, herbs, and formed onto skewers before being cooked.",
    category: "Mix Masala ",
  },
  {
    id: "19",
    name: "Bombay Birayni masala ",
    image: bombay_biriyani,
    price: 300,
    description:
      "Bombay biryani is a flavorful, aromatic rice dish with spiced meat (usually chicken or mutton), potatoes, and a rich blend of Bombay-style spices, often served with raita.",
    category: "Mix Masala ",
  },
  {
    id: "20",
    name: "Tandoori masala ",
    image: tandoori_masala,
    price: 300,
    description:
      "Tandoori masala is a vibrant spice mix made with ingredients like cumin, coriander, paprika, and garam masala, used to marinate meats for cooking in a tandoor oven.",
    category: "Mix Masala ",
  },
  {
    id: "21",
    name: "Boti Kabab masala ",
    image: boti_kabab,
    price: 300,
    description:
      "Boti kebab is a delicious, tender grilled dish made from marinated cubes of meat (often beef or lamb), seasoned with spices and yogurt, then cooked until perfectly charred.",
    category: "Mix Masala ",
  },
];
