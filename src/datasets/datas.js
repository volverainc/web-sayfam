import js from "../assets/js.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import vscode from "../assets/vscode.png"
import photoshop from "../assets/photoshop.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import wp from "../assets/wp.png"
import screenshot from "../assets/screenshot.png"
import screenshot2 from "../assets/screenshot2.png"

export const skillImages = [
    {
        img: js,
        title: "JAVASCRIPT"
    },
    {
        img: react,
        title: "REACT"
    },
    {
        img: redux,
        title: "REDUX"
    },
    {
        img: vscode,
        title: "VS CODE"
    },
    {
        img: photoshop,
        title: "PHOTOSHOP"
    },
    {
        img: html,
        title: "HTML"
    },
    {
        img: css,
        title: "CSS"
    },
    {
        img: wp,
        title: "WORDPRESS"
    },
]

export const socials = [
    {
        icon: "fa-brands fa-twitter fa-lg",
        link: "#"
    },
    {
        icon: "fa-brands fa-codepen fa-lg",
        link: "https://codepen.io/volverainc"
    },
    {
        icon:"fa-brands fa-instagram fa-lg",
        link: "#"
    }
]

export const heroButtons = [
    {
        icon: "fa-brands fa-github fa-lg",
        name: "GitHub",
        url: "https://github.com/volverainc"
    },
    {
        icon: "fa-brands fa-linkedin-in fa-lg",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/emre-sert-386144a4/"
    }
]

export const projects = [
    {
        thumbnail: screenshot,
        title: "Teknolojik Yemekler",
        description: "Attractive looking food ordering website for restaurants. The website provides an extremely easy and fast ordering process. ",
        tags: ["redux","vercel","react"],
        url: "https://s7-challenge-pizza.vercel.app/",
        github: "https://github.com/volverainc/fsweb-s7-challenge-pizza"
    },
    {
        thumbnail: screenshot2,
        title: "Fliperr",
        description: "A simple domain portfolio website designed on WordPress with a fully custom coded theme by me. You can easily add your domains to the site and start receiving offers from prospective buyers.  ",
        tags: ["wordpress","php", "cpanel"],
        url: "https://fliperr.com/",
        github: "#"
    }
]