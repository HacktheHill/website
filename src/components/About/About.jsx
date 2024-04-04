import React, { useState } from "react";
import { t } from "../../i18n";
import hth1 from "/src/assets/gallery/panel1.webp"

export default function About() {
	const [activeImage, setActiveImage] = useState(0);

	const getImageClassName = index => {
		return `relative w-full h-full object-cover border-2 border-red-500 transition-all duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[4px_4px_0px_black] ${
			activeImage === index
				? "z-10 bg-opacity-50 border-shade-3 bg-light_accent active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
				: "z-0 cursor-pointer"
		}`;
	};

	return (
		<>
			<div className="w-full bg-shade-9 justify-center items-center bg-flat-mountains-svg bg-center bg-cover bg-no-repeat bg-fixed ">
				<div className="flex flex-col w-full h-full justify-center items-center gap-16 py-36 text-center">
				<div className="flex flex-col px-8 gap-4">
					<h1>It's more than just a hackathon</h1>
					<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, aliquid.
					</h2>
				</div>
					<div className="flex w-9/12 h-4/6 flex-row justify-between items-center flex-wrap xl:gap-16 xl:w-11/12">
						<div className="flex basis-5/12 justify-start items-center flex-wrap gap-8 xl:basis-full xl:justify-center">
							<div className=" text-left ">
								<div className="w-6/7 text-pretty p-3 ">
									<p className="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
									</p>
									<p className="mb-5">molestiae quas vel sint commodi repudiandae.</p>
									<p className="mb-5">
										numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
									</p>
									<p className="mb-5">
										optio, eaque rerum! Provident similique accusantium nemo autem.
									</p>
								</div>
							</div>
						</div>

						<div
							className="basis-6/12 h-gallery grid grid-rows-12 grid-cols-12 gap-2 xl:basis-full xs:flex xs:flex-col aos-frame aos-animate w-1/2"
							data-aos="zoom-in"
						>
							<div className="border-2 col-start-1 col-end-9 row-start-9 row-end-13 aos-frame aos-animate">
								<img
									src="/src/assets/gallery/panel1.webp"
									alt="Description"
									className={getImageClassName(0)}
									onClick={() => setActiveImage(0)}
								/>
							</div>
							<div
								className="border-2 col-start-1 col-end-6 row-start-1 row-end-6 xs:h-36 aos-frame aos-animate"
							>
								<img
									src="/src/assets/gallery/hth1.webp"
									alt="Description"
									className={getImageClassName(1)}
									onClick={() => setActiveImage(1)}
								/>
							</div>
							<div
								className="border-2 border-shade-3  col-start-5 col-end-13 row-start-4 row-end-10 xs:h-36 aos-frame aos-animate"
								data-aos="zoom-in"
							>
								<img
									src="/src/assets/gallery/hth2.webp"
									alt="Description"
									className={getImageClassName(2)}
									onClick={() => setActiveImage(2)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}