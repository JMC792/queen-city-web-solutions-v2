import {Fragment} from "react";
import Image from 'next/image'

export default function Team2({heading, members}){
    return(
        <Fragment>
            <div className="container py-20" id="team">
                <div className="grid gap-y-5">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-y-4 container">
                        <div className="text-2xl text-purple-800">{heading[0]}</div>
                        <div className="text-4xl lg:text-6xl font-bold text-center">{heading[1]}</div>
                        <div className="text-center">{heading[2]}</div>
                    </div>

                    {/* Team Members */}
                    <div className="grid lg:grid-cols-3 gap-5 xl:px-24 pt-12">

                        {/* 0 */}
                        <div className="relative ">
                            <Image src={members[0][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[0][0]}</div>
                                    <div className="text-sm">{members[0][1]}</div>
                                </div>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="relative ">
                            <Image src={members[1][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[1][0]}</div>
                                    <div className="text-sm">{members[1][1]}</div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="relative ">
                            <Image src={members[2][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[2][0]}</div>
                                    <div className="text-sm">{members[0][1]}</div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="relative ">
                            <Image src={members[3][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[3][0]}</div>
                                    <div className="text-sm">{members[0][1]}</div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="relative ">
                            <Image src={members[4][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[4][0]}</div>
                                    <div className="text-sm">{members[0][0]}</div>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="relative ">
                            <Image src={members[5][2]} alt="Jesus Chavez" className="w-full h-full rounded-lg" />
                            <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
                                <div className="backdrop-filter backdrop-blur-lg px-16 py-4 text-white text-center rounded-lg">
                                    <div className="text-md font-bold">{members[5][0]}</div>
                                    <div className="text-sm">{members[0][1]}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
