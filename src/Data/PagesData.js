import csmob from "../images/csmobileshot.png"
import csdesk from "../images/csdeskshot.png"
import mclmob from "../images/mclmob.png"
import gmmob from "../images/gmmob.png"
import gmdesk from "../images/gmdesk.png"

const data = [
    {
        id: 1,
        appname: "Gamon",
        description: "A game marketplace, where you can find the game you want! Here you can view and order your games",
        madewith: "React, React-Router, Node Express, MySQL, PayPal API",
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
        description: "A web for ordering your favorite type of coffe!",
        madewith: "React, React-Router, Firebase",
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
        madewith: "React, React-Router, forms",
        imagedesk: undefined,
        imagemob: mclmob,
        hasdemo: true,
        appurl: "https://mycartlist.netlify.app",
        hascode: true,
        githuburl: "https://github.com/PatoTey/MyCartList"
    }
]

export default data