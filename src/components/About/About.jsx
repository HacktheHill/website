import React from "react";
import { t } from "../../i18n";
import styles from "./About.module.css";
import leftLeaves from "/SVGs/About/left-leaves.svg";
import rightLeaves from "/SVGs/About/right-leaves.svg";

function About() {
	return (
		<div className={styles.about} id="about">
			<div className={styles["about-text"]}>
				<h1>{t("about.title")}</h1>
				<p>{t("about.p1")}</p>
				<p>{t("about.p2")}</p>
				<p>{t("about.p3")}</p>
			</div>
			<div className={styles.frame}>
				<img className={styles["left-leaves"]} src={leftLeaves} alt="left-leaves" />
				<iframe
					src="https://www.youtube.com/embed/videoseries?si=ZobjNMvDAoBIorPw&controls=0&list=PLvXySQVib-mmNoOeoORHRGz2UyeSEgj7Q&autoplay=0&loop=1&mute=0"
					title={t("about.title")}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<img className={styles["right-leaves"]} src={rightLeaves} alt="right-leaves" />
			</div>
		</div>
	);
}

export default About;
