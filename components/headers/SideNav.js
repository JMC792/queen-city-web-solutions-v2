import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

//Components
import {XMarkIcon} from "@heroicons/react/20/solid";

export default function SideNav(props){

    return(
        <Fragment>
            {/* Mobile Navbar  */}
            <nav className={
                props.offcanvas
                    ? "offcanvas-menu-wrap active"
                    : "offcanvas-menu-wrap"
            }>
                <nav className="offcanvas-menu z-50">
                    <div className="offcanvas-menu-items" onClick={props.showOffcanvas}>

                        {/* Logo and Close Button Wrapper*/}
                        <div className="navbar-toggle flex justify-between items-center pb-[15px] cursor-pointer">
                            
                            {/* Logo */}
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image 
                                        src={props.logo} 
                                        height={60} 
                                        width={100} 
                                        alt={"logo"}
                                    />
                                </Link>
                            </div>

                            {/* Close Button */}
                            <button className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all" aria-label="Right Align">
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* List */}
                        <div>
                            
                            <Link href={"/"} >
                                <div className='offcanvas-text'>
                                    Home
                                </div>
                            </Link>

                            {props.items.map((item) => {
                                const hasChildren = Boolean(item.children?.length);

                                if (!hasChildren) {
                                    return (
                                        <Link key={item.name} href={item.href}>
                                            <div className='offcanvas-text'>
                                                {item.name}
                                            </div>
                                        </Link>
                                    );
                                }

                                return (
                                    <div key={item.name} className="border-t">
                                        <Link href={item.href}>
                                            <div className='pb-2 pt-[15px] text-[15px] font-semibold uppercase leading-6'>
                                                {item.name}
                                            </div>
                                        </Link>
                                        <div className="pb-3 pl-4">
                                            {item.children.map((child) => (
                                                <Link key={child.name} href={child.href}>
                                                    <div className="py-2 text-sm font-medium text-slate-600">
                                                        {child.name}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                            
                        </div>

                    </div>
                </nav>
            </nav>
        </Fragment>
    )
}
