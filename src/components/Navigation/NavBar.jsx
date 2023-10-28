import { Link } from "react-scroll";
import { locale, t } from "../../i18n";
import "./NavBar.css";
import logo from "/Logos/hackthehill-logo.svg";
import { useState } from "react";

function Navbar({ pageScroll, sidebarOpen, setSidebarOpen }) {
	const [language, setLanguage] = useState(true);

	return (
		<>
			<nav className="navbar" data-scrolled={pageScroll > 50} aria-label={t("navbar.aria_label")}>
				<Link
					className="link logo"
					activeClass="active"
					to="hero"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					href="#hero"
				>
					<img alt="Logo" src={logo}></img>
				</Link>

				<div className="language-selector">
					<button className="link language-button" type="submit" onClick={() => {
						setLanguage(!language);
						locale.set(language ? "fr" : "en");
					}}>
						{language ? "FR" : "EN"}
					</button>
				</div>

				<ul>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={-130}
							duration={500}
							href="#about"
						>
							{t("navbar.links.about")}
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="testimonials"
							spy={true}
							smooth={true}
							offset={-130}
							duration={500}
							href="#testimonials"
						>
							{t("navbar.links.testimonials")}
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="schedule"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							href="#schedule"
						>
							{t("navbar.links.hacker")}
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="sponsors"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							href="#sponsors"
						>
							{t("navbar.links.sponsors")}
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="collaborators"
							spy={true}
							smooth={true}
							offset={-130}
							duration={500}
							href="#collaborators"
						>
							{t("navbar.links.collaborators")}
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="faq"
							spy={true}
							smooth={true}
							offset={-130}
							duration={500}
							href="#faq"
						>
							{t("navbar.links.faq")}
						</Link>
					</li>
				</ul>
				<button
					className={`sidebar-icon ${sidebarOpen ? "sidebar-open" : ""}`}
					onClick={() => setSidebarOpen(!sidebarOpen)}
				>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</nav>
		</>
	);
}

export default Navbar;
