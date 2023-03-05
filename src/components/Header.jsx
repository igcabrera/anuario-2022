import React from "react";
import { RiFacebookCircleFill, RiMusic2Fill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";


export default function Header() {
    return (
        <header className="bg-blue-500 h-fit  pt-4  flex align-middle items-end justify-end gap-4 p-4">


            {/*<p className="text-white text-xs h-full py-2">CORPORACIÓN EDUCACIONAL <br /> MASÓNICA DE TALCAHUANO</p>*/}
            <ul className="flex item-center h-full text-md py-2 gap-4 contents items-end align-middle justify-end text-white">
                <li>
                    <RiFacebookCircleFill />
                </li>
                <li>
                    <RiMusic2Fill />
                </li>
                <li>
                    <RiInstagramFill />
                </li>
                <li>
                    <RiYoutubeFill />
                </li>
            </ul>

        </header>
    );
}