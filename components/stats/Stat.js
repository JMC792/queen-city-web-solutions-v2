import {Fragment} from "react";

function stat({stat}){

    return(
        <Fragment>
            {/* stat */}
            <div className="bg-back-7 bg-cover bg-right-top text-neutral-200">
                <div className="container py-32">
                    <div className="flex justify-center">
                        <div className='text-center grid lg:grid-cols-3 gap-y-20 lg:gap-x-[8rem]'>

                            {/* Monday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[0][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[0][1][0]}</div>
                                        <div>{stat[0][1][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[0][2][0]}</div>
                                        <div>{stat[0][2][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[0][3][0]}</div>
                                        <div>{stat[0][3][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Tuesday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[1][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[1][1][0]}</div>
                                        <div>{stat[1][1][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[1][2][0]}</div>
                                        <div>{stat[1][2][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[1][3][0]}</div>
                                        <div>{stat[1][3][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Wednesday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[2][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[2][1][0]}</div>
                                        <div>{stat[2][1][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[2][2][0]}</div>
                                        <div>{stat[2][2][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[2][3][0]}</div>
                                        <div>{stat[2][3][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[2][4][0]}</div>
                                        <div>{stat[2][4][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Thursday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[3][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[1][1][0]}</div>
                                        <div>{stat[1][1][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[1][2][0]}</div>
                                        <div>{stat[1][2][1]}</div>
                                    </li>
                                    <li>
                                        <div>{stat[1][3][0]}</div>
                                        <div>{stat[1][3][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Friday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[4][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[4][1][0]}</div>
                                        <div>{stat[4][1][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Saturday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[5][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[5][1][0]}</div>
                                        <div>{stat[5][1][1]}</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Sunday */}
                            <div className="">
                                <h3 className="text-3xl font-medium capitalize">{stat[6][0]}</h3>
                                <ul className= "pt-4 grid gap-y-5 text-md">
                                    <li>
                                        <div>{stat[6][1]}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default stat
