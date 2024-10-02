import csmob from "../images/csmob.webp"
import mcldesk from "../images/mclmob.webp"
import gmdesk from "../images/gmmob.webp"
import jmmob from "../images/jmmob.webp"
import tapmob from "../images/tapmob.webp"
import cavelord from "../images/clrd.webp"
import rsnd from "../images/rsnd.webp"

const data = [
    {
        id: 8,
        appname: "Cave Lord | 1st Place!",
        description: "Winner of the Micro Jam #21 that took place in 48 hours. Theme was 'Underground' and a prerequisite was that players started with LOOT. Coding, art and music by Teyo.",
        madewith: ["Godot", "GDScript", "Aseprite", "Beatwave"],
        imagedesk: cavelord,
        imagealt: "Cave Lords Itchio page",
        hasdemo: true,
        appurl: "https://nlteyo.itch.io/cave-lord",
        hascode: false,
        githuburl: "",
        work: true,
        time: "August 2024",
    },
    {
        id: 9,
        appname: "Royal Sands | 4th Place!",
        description: "4th place in the Micro Jam #22 that took place in 48 hours. Theme was 'Desert' and a prerequisite was Resources are scarce. Coding, art and music by Teyo.",
        madewith: ["Godot", "GDScript", "Aseprite", "Beatwave"],
        imagedesk: rsnd,
        imagealt: "Royal Sands Itchio page",
        hasdemo: true,
        appurl: "https://nlteyo.itch.io/royal-sands",
        hascode: false,
        githuburl: "",
        work: true,
        time: "September 2024",
    },
    {
        id: 1,
        appname: "J&M Limpieza",
        description: "A landing page for a cleaning company. You can contact and order one of the services at home",
        madewith: ["React", "Front-End"],
        imagedesk: jmmob,
        imagealt: "JM's Limpieza Web site",
        hasdemo: false,
        appurl: "https://jmlimpieza.cl",
        hascode: false,
        githuburl: "",
        work: true,
        time: "Nov 2023 - Mar 2024",
    },
    {
        id: 2,
        appname: "Gamon",
        description: "A game marketplace where you can view, wishlist and order your favorite games using the Paypal API",
        madewith: ["React", "React-Router", "Node Express", "MySQL", "PayPal API", "Front-End", "Back-End"],
        imagedesk: gmdesk,
        imagealt: "Gamon web page to order your game's keys",
        hasdemo: true,
        appurl: "https://gamon.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/Gamon",
        work: false,
        time: "",
    },
    {
        id: 3,
        appname: "Teyo Pixel Arts Portfolio",
        description: "An Art portfolio showcasing pixel arts, and information for posible clients.",
        madewith: ["React", "React Router", "Front-End"],
        imagedesk: tapmob,
        imagealt: "Three views of a pixel art portfolio",
        hasdemo: true,
        appurl: "https://teyoarts.netlify.app",
        hascode: false,
        githuburl: "",
        work: false,
        time: "",
    },
    {
        id: 4,
        appname: "Try Hardware",
        description: "E-Commerce site with forums/community space for buyers and sellers",
        madewith: ["Laravel", "PHP", "MySQL", "MercadoPago API", "Front-End", "Back-End"],
        imagedesk: false,
        imagealt: "TryHardWare Logo",
        hasdemo: false,
        appurl: "",
        hascode: false,
        githuburl: "",
        work: true,
        time: "Feb 2021 - May 2021",
    },
    {
        id: 5,
        appname: "Good Lucky Arica",
        description: "An E-commerce site to buy and order donuts, cakes and other sweets",
        madewith: ["Laravel", "PHP", "MySQL", "MercadoPago API", "Front-End", "Back-End"],
        imagedesk: false,
        imagealt: "Good Lucky Company Logo",
        hasdemo: false,
        appurl: "",
        hascode: false,
        githuburl: "",
        work: true,
        time: "Sept 2020 - Dec 2020",
    },
    {
        id: 6,
        appname: "CoffeStop",
        description: "A Front-End web app to showcase recipes and ordering your favorite type of coffe!",
        madewith: ["React", "React-Router", "Firebase", "Front-End"],
        imagedesk: csmob,
        imagealt: "Coffe Stop web page to order your favorite coffes",
        hasdemo: true,
        appurl: "https://coffeestopshop.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/CoffeeStop",
        work: false,
        time: "",
    },
    {
        id: 7,
        appname: "MyCartList",
        description: "A web tool for organizing your shopping, seing your quantities and pricing of your cart",
        madewith: ["React", "React-Router", "forms", "Front-End"],
        imagedesk: mcldesk,
        imagealt: "My Cart list, a tool for shoping and organazing",
        hasdemo: true,
        appurl: "https://mycartlist.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/MyCartList",
        work: false,
        time: "",
    }
]

export default data