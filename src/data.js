// import icons
import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { MdFoodBank,
MdFastfood } from 'react-icons/md';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import menu from '../src/assets/img/hero/menu.gif'

export const navData = [
  { href: 'home' , name: 'Home' },
  { href: 'about', name: 'About' },
  { href: 'menu', name: 'Menu' },
  { href: 'reservation', name: 'Book a catering event' },
  { href: 'contact', name: 'Contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Caribbean Corner NL',
  subtitle:
    'Caribbean cuisines are a magnificent mash-up of many flavours made even more unique by their components, which include distinctively flavoured spices and sauces. ',
  btnText: 'View Our Menu',
  image: menu,
};

export const socialData = [
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: 'https://www.skipthedishes.com/caribbean-corner-302-water-street?utm_source=google&utm_medium=organic&utm_campaign=gpa', icon: <MdFoodBank /> },
  { href: 'https://food.google.com/chooseprovider?restaurantId=/g/11tg7z8kjh&g2lbs=ALIxsqomKHpLDzWTez9_uTLuIvfA-QnOwREm3Y-mbJEYtaklpyVziV7yYazP0RUB-UHWNBSZse1qqNDjOHMz8CIMkCGoHUVwRQ%3D%3D&hl=en-CA&gl=ca&cs=1&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=tKsDZP2wFp-YptQPpKSUwAQ&ei=tKsDZP2wFp-YptQPpKSUwAQ&fo_s=OA,AH&orderType=2&sei=CZrmzxaPRYy7EQ7KrBCzMeDE&utm_campaign&utm_source=search', icon: <MdFastfood /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Colorful is one word to describe the culture of the Caribbean people. It’s a mesmerizing mix of influences rooted in its rich heritage, shaped by its long history of colonization, and molded by waves of immigration. The region is a melting pot of different languages, cuisine, music, and customs. Its culture is a beautiful blend of a colonial and native elements shaped by each country’s socio-cultural experiences. It is this diversity that gives the Caribbean region a unique identity. Caribbean cuisine consists of culinary influences from Africa, France, Spain, India, Dutch, America, Britain, Middle East and Asia. These cuisines are a beautiful hodgepodge of different flavors made even more interesting by its ingredients, distinctly flavored spices and condiments. It is a feast for all the senses meant to excite not just the palate but the eyes and nose as well. Food in the Caribbean is considered a social activity where tummies are nourished, and familial bonds are forged.',
  btnText: 'View Menu',
  image: AboutImg,
  image1: menu,
};

export const menuData = {
  title: 'flavours of the caribbeans',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  image: menu,
  menuItems: [
    {
      image: MenuImg1,
      name: 'Oxtail',
      price: 'CA$18.99',
      description: 'Delicious, stewed beef tail with carrots braised in red wine and stock.',
    },
    {
      image: MenuImg2,
      name: 'Chicken Gyros',
      price: 'CA$13.99',
      description: 'A gyro is a sandwich that has lamb, beef, pork, or chicken, in pita bread, topped with lettuce, tomato, onion, and tzatziki sauce.',
    },
    {
      image: MenuImg3,
      name: 'Homestyle Rotisserie Chicken',
      price: 'CA$10.99',
      description: 'A flavourful South African staple.',
    },
    {
      image: MenuImg4,
      name: 'Curry Roti',
      price: 'CA$17.99',
      description: 'Roti is a wrap style sandwich filled with either curried or stewed meats along with chickpeas and potatoes.',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'We cater to functions of all sizes and shapes. Fill out the form below with any pertinent event information, and we will contact you to confirm.',
  modelImg: ModelBlackImg,
  btnText: 'make an enquiry',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '302 Water St, St. Johns, NL A1C 1B8',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '12:00 PM - 11:00 PM',
      },
      {
        days: 'saturday',
        hours: '12:00 PM - 04:00 AM',
      },
      {
        days: 'sunday',
        hours: 'closed',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaFacebookF /> },
    ],
  },
};
