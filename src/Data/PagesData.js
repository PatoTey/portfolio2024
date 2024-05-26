import csmob from "../images/csmobileshot.webp"
import csdesk from "../images/csdeskshot.webp"
import mclmob from "../images/mclmob.webp"
import gmmob from "../images/gmmob.webp"
import gmdesk from "../images/gmdesk.webp"

const data = [
    {
        id: 1,
        appname: "Gamon",
        description: "A game marketplace where you can view, wishlist and order your favorite games using the Paypal API",
        madewith: ["React", "React-Router", "Node Express", "MySQL", "PayPal API"],
        imagedesk: gmdesk,
        imagemob: gmmob,
        hasdemo: true,
        appurl: "https://gamon.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/Gamon"
    },
    {
        id: 2,
        appname: "CoffeStop",
        description: "A web to showcase recipes and ordering your favorite type of coffe!",
        madewith: ["React", "React-Router", "Firebase"],
        imagedesk: csdesk,
        imagemob: csmob,
        hasdemo: true,
        appurl: "https://coffeestopshop.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/CoffeeStop"
    },
    {
        id: 3,
        appname: "MyCartList",
        description: "A tiny shopping list app",
        madewith: ["React", "React-Router", "forms"],
        imagedesk: undefined,
        imagemob: mclmob,
        hasdemo: true,
        appurl: "https://mycartlist.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/MyCartList"
    }
]

export default data