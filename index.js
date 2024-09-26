"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

// 1.creating a component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Counter />
            </div>
        );
    }
}

// making another functional component
function Dog() {
    return (<>
        <div className="_452c3ec4 d68c66a8">
        <div className="cf325dbd list ma0 pa0 tr z-999">
            <div className="c746cc21 list ma0 pa0 tr z-999"></div>
        </div>
        <div className="flex flex-column vh-100">
            <header className="_755f5b0f bg-white z-2 bb b--black-20">
                <div></div>
                <div className="e7070742 pv3-ns ph1-ns bg-white">
                    <div id="header" className="bbefbfcc">skip to:
                        <a aria-label="skip to content" className="d6d0dbcf" href="#main">content</a>
                        <a aria-label="skip to package search" className="d6d0dbcf" href="#search">package
                            search</a>
                        <a aria-label="skip to sign in" className="d6d0dbcf" href="#signin">sign in</a>
                    </div>
                    <div className="ef7c6e62 center mw9 border-box ph4-ns ph3 flex items-center">
                        <span className="_0edb515f pr3 dn dib-ns link lh-title dim b--white-30">❤</span>
                        <nav className="_4a5f2a79 db w-100 w-auto-ns truncate" aria-label="Product Navigation">
                            <ul id="main-menu" className="list pl0" role="menu" aria-label="Nav Menu">
                                <li role="none" className="dib">
                                    <a href="/products/pro" role="menuitem"
                                       className="c6c55db4 no-underline f6-ns f7 fw5 dim pr2 pl2"
                                       id="nav-pro-link">Pro</a>
                                </li>
                                <li role="none">
                                    <a href="/products/teams" role="menuitem"
                                       className="c6c55db4 no-underline f6-ns f7 fw5 dim pr2 pl2"
                                       id="nav-teams-link">Teams</a>
                                </li>
                                <li role="none" className="dib">
                                    <a href="/products" role="menuitem"
                                       className="c6c55db4 no-underline f6-ns f7 fw5 dim pr2 pl2"
                                       id="nav-pricing-link">Pricing</a>
                                </li>
                                <li role="none" className="dib"><a href="https://docs.npmjs.com" role="menuitem"
                                                                   className="c6c55db4 no-underline f6-ns f7 fw5 dim pr2 pl2"
                                                                   id="nav-docs-link">Documentation</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="_4ea0e50d bt b--black-10">
                    <div className="c5b9953b center mw9 flex flex-wrap ph4-ns border-box"><span
                        className="_657f443d">npm</span>
                        <div className="af43375d mt3 db mr4-ns pb3 pb0-ns flex-auto 2-ns ph3 ph0-ns"><a href="/"
                                                                                                        aria-label="Npm">
                            <svg viewBox="0 0 780 250" aria-hidden="true">
                                <path fill="#231F20"
                                      d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
                            </svg>
                        </a></div>
                        <div id="search"
                             className="_581ebd89 relative flex-auto w-100 w-50-ns pv2-ns order-1-ns order-2">
                            <form id="search" method="GET" action="/search"
                                  className="_13c93d41 relative flex bg-transparent ph3 ph2 pv2 ph0-ns pv0-ns bt b--black-10 bn-ns">
                                <div className="e82b10fd relative dde91b96">
                                    <div className="_2f299eeb nowrap flex"><span
                                        className="_705cdf4f db fl pl3 pr1"><svg
                                        width="15px" height="15px" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 18 18" aria-hidden="true"><g stroke="none" stroke-width="1"
                                                                                  fill="none" fill-rule="evenodd"><g
                                        stroke="#777777" stroke-width="1.3"><g><path
                                        d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"></path><path
                                        d="M11.4913,11.4913 L17.8683,17.8683"></path></g></g></g></svg></span><input
                                        type="search" role="combobox" name="q" hotkeys="[object Object]"
                                        placeholder="Search packages" aria-label="Search packages"
                                        aria-controls="typeahead-list-96465" aria-expanded="false"
                                        aria-activedescendant="" inputref="[object Object]" autoComplete="off"
                                        className="_390acbc5 f5 fw3 black relative" value="" element="input"/></div>
                                </div>
                                <button type="submit"
                                        className="_0da775bb bn pv2 ph4 f6 white pointer bn pv2 ph4 f6 white pointer"
                                        aria-label="Search">Search
                                </button>
                                <input type="hidden" name="csrftoken"
                                       value="PgTgmsgk7UkJKk2gfmWFvGqy5NVDqFmFZSHklQFimG2"/></form>
                        </div>
                        <div
                            className="_6f31c82b ml3 mt2 mt0-ns pv2-ns flex-auto tr nowrap relative pointer fw6 order-1 order-2-ns">
                            <div className="_1066d9e7 flex items-center self-center pl3"><a href="/signup"
                                                                                            id="signup"
                                                                                            className="_9752c8b3 pa2 lh-copy br2 f6 no-underline fw5 black dim ph3 mr3">Sign
                                Up</a><a href="/login" id="signin"
                                         className="_352269a0 pa1 lh-copy br2 f6 no-underline fw5 black dim">Sign
                                In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main id="main">
                <div>
                    <article className="bg-white dark-gray _8eb61c75">
                        <section className="f7728d4c _8c1ee087">
                            <div className="center mw7 pv5 ph3 tc white"><h1
                                className="f-subheadline-m f-subheadline-l f1 lh-title fde13d93">Build amazing
                                things</h1>
                                <div className="center mw6 lh-copy">
                                    <div>We're GitHub, the company behind the npm Registry and npm CLI. We offer
                                        those
                                        to the community for free, but our day job is building and selling useful
                                        tools
                                        for developers like you.
                                    </div>
                                    <h2 className="f2-l f3 lh-title">Take your JavaScript development up a
                                        notch</h2>
                                    <div>Get started today for free, or step up to npm Pro to enjoy a premium
                                        JavaScript
                                        development experience, with features like private packages.
                                    </div>
                                    <div className="mt5 flex flex-wrap">
                                        <div className="w-100 w-50-ns pr3-ns pb3"><a href="/signup"
                                                                                     className="undefined undefined _353dca9c _748f7b74 db mw5-ns center pv3 ph4 b no-underline white">Sign
                                            up for free</a></div>
                                        <div className="w-100 w-50-ns pl3-ns pb3"><a href="/products/pro"
                                                                                     className="undefined undefined aad94569 _748f7b74 db mw5-ns center pv3 ph4 b no-underline white">Learn
                                            about Pro</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="pv5 ph3 bg-white">
                            <div className="center mw6 mb5 tc lh-copy"><img alt="" role="presentation"
                                                                            src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
                                                                            srcSet="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png, https://static.npmjs.com/attachments/ck3uwed1cmso79y74pjugy10f-gak-2x.png 2x, https://static.npmjs.com/attachments/ck3uweeyt72yk887420va22p9-gak-3x.png 3x"
                                                                            className="db center mb4"/>
                                <h2 className="f2-l f3 lh-title">Bring the best of open source to you, your team,
                                    and
                                    your
                                    company</h2>
                                <div>Relied upon by more than 17 million developers worldwide, npm is committed to
                                    making JavaScript development elegant, productive, and safe. The free npm
                                    Registry
                                    has become the center of JavaScript code sharing, and with more than two million
                                    packages, the largest software registry in the world. Our other tools and
                                    services
                                    take the Registry, and the work you do around it, to the next level.
                                </div>
                            </div>
                        </section>
                        <link
                            href="https://fonts.googleapis.com/css?family=Arimo|Poppins:400,600,700&amp;display=swap"
                            rel="stylesheet"/>
                    </article>
                </div>
            </main>
            <footer className="cd2827bb bt b--black-10 mt4"><h2 className="e13b5dae">Footer</h2>
                <div id="footer" className="center mw9 pa3 flex flex-column flex-wrap-m flex-row-ns">
                    <div className="flex-auto pa4-ns pa3 w-100 w-10-l">
                        <div className="_802b5507 pt3"><a target="_blank" rel="noopener noreferrer nofollow"
                                                          href="https://github.com/npm"
                                                          aria-label="Visit npm GitHub page">
                            <svg viewBox="0 0 27.23 27.23" aria-hidden="true">
                                <rect fill="#333333" width="27.23" height="27.23" rx="2"></rect>
                                <polygon fill="#fff"
                                         points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"></polygon>
                            </svg>
                        </a></div>
                        <div className="_802b5507 pt3"><a target="_blank" rel="noopener noreferrer nofollow"
                                                          href="https://github.com" aria-label="GitHub">
                            <svg aria-hidden="true" role="img" className="" viewBox="0 0 16 16" width="50"
                                 height="50"
                                 fill="black" style="display:inline-block;user-select:none;vertical-align:top">
                                <path fill-rule="evenodd"
                                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a></div>
                    </div>
                    <div className="flex-auto pa4-ns pa3 w-30-ns w-50-m"><h3 id="support"
                                                                             className="_1b8c0a9f">Support</h3>
                        <ul className="list pl0" aria-labelledby="support">
                            <li className="pv1"><a className="link" href="https://docs.npmjs.com">Help</a></li>
                            <li className="pv1"><a className="link"
                                                   href="https://github.com/advisories">Advisories</a>
                            </li>
                            <li className="pv1"><a className="link" href="http://status.npmjs.org/">Status</a></li>
                            <li className="pv1"><a className="link" href="/support">Contact npm</a></li>
                        </ul>
                    </div>
                    <div className="flex-auto pa4-ns pa3 w-30-ns w-50-m"><h3 id="company"
                                                                             className="_1b8c0a9f">Company</h3>
                        <ul className="list pl0" aria-labelledby="company">
                            <li className="pv1"><a className="link" href="/about">About</a></li>
                            <li className="pv1"><a className="link" href="https://github.blog/tag/npm/">Blog</a>
                            </li>
                            <li className="pv1"><a className="link" href="/press">Press</a></li>
                        </ul>
                    </div>
                    <div className="flex-auto pa4-ns pa3 w-30-ns w-50-m"><h3 id="terms"
                                                                             className="_1b8c0a9f">Terms &amp;
                        Policies</h3>
                        <ul className="list pl0" aria-labelledby="terms">
                            <li className="pv1"><a className="link" href="/policies/">Policies</a></li>
                            <li className="pv1"><a className="link" href="/policies/terms">Terms of Use</a></li>
                            <li className="pv1"><a className="link" href="/policies/conduct">Code of Conduct</a>
                            </li>
                            <li className="pv1"><a className="link" href="/policies/privacy">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
        <div className="_8a62ca63 fixed top-0 left-0 z-999"
             style="opacity:0;transform:scaleX(1);-webkit-transform:scaleX(1);-moz-transform:scaleX(1)"></div>
    </div>
    </>);
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}

// 2.selecting the #root div element
const rootDiv = document.querySelector("#root");

// 3.making the #root div as entry point
const root = ReactDOM.createRoot(rootDiv);

// 5.rendering the component
root.render(<App/>);


