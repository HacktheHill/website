import { Link } from "react-scroll";
import React from "react";
import styles from "./Button.module.css";
function InnerButton({ children, ...rest }) {
	return <button {...rest}>{children}</button>;
}

export default function Button({ children, href, target, offset, ...rest }) {
	if (href.startsWith("#")) {
		return (
			<Link className={styles.button} to={href.slice(1)} smooth={true} offset={offset} duration={500} href={href}>
				<InnerButton {...rest}>{children}</InnerButton>
			</Link>
		);
	} else if (href) {
		return (
			<a href={href} target={target} referrer={target === "_blank" ? "noreferrer" : ""} className={styles.button}>
				<InnerButton {...rest}>{children}</InnerButton>
			</a>
		);
	} else {
		return <InnerButton {...rest}>{children}</InnerButton>;
	}
}
