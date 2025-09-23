import { Fragment } from "react";
import Image from "next/image";
import Navbar from "@components/headers/Navbar.js";
import layout from "public/locales/english/layout.json";
import logo from "public/icons/logo.svg"

export default async function Header1(props){

    return(
        <Fragment>
            <Navbar
          link2 = {layout.sitemap.about} //About
          link3 = {layout.sitemap.link3} //Portfolio
          link4 = {layout.sitemap.contact} //Contact
          link5 = {layout.sitemap.service} //Service
          link6 = {layout.sitemap.blog} //Blog
          phoneNumber = {layout.number}
          logo = {logo}
        />
            <div className="relative bg-indigo-800">
                <div className="absolute inset-0">
                    <img
                    alt=""
                    src={props.image}
                    className="h-full w-full object-cover"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{props.title}</h1>
                    <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                        {props.text}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}