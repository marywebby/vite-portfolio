import React from "react";

const LinkBar = () => {
    return (
        <ul className="flex items-center pl-0 list-none mb-24" aria-label="Socials-Links">
            <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://github.com/marywebby" aria-label="GitHub (opens in a new tab)" target="_blank" rel="noreferrer noopener" title="Github">
                    <span className="sr-only">Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="h-10 w-10" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="www.linkedin.com/in/marywebby" aria-label="LinkedIn (opens in a new tab)" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-10 w-10" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://codepen.io/marwebb" aria-label="CodePen (opens in a new tab)" target="_blank" rel="noreferrer noopener" title="CodePen">
                    <span className="sr-only">CodePen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
                        <path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" strokeWidth={5}></path>
                    </svg>
                </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://dev.to/marywebby" aria-label="Devto (opens in a new tab)" target="_blank" rel="noreferrer noopener" title="Devto">
                    <span className="sr-only">Devto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="white" className="h-10 w-10" aria-hidden="true">
                        <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path>
                    </svg>
                </a>
            </li>
        </ul>
    );
};

export default LinkBar;