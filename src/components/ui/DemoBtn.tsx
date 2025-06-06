import { RocketLaunch } from "@phosphor-icons/react";
import React from "react";

type PropsT = {
    link: string;
};

export const DemoBtn: React.FC<PropsT> = ({ link }) => {
    return (
        <a
            className="peer flex items-center gap-2 rounded border px-2 py-1 text-xs leading-0 underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light dark:hover:text-accent-dark dark:hover:drop-shadow-dark"
            href={link}
            target="_blank"
        >
            demo
            <RocketLaunch size={16} />
        </a>
    );
};
