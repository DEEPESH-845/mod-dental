import React from "react";
import Services from "@/app/components/home/ServicePage/Services";

import sedation from "@/../public/assets/sedation.png";
import soft_tissue_laser from "@/../public/assets/soft_tissue_laser.png";
import periodontal from "@/../public/assets/periodontal.png";
import dignostic_prevention from "@/../public/assets/dignostic_prevention.png";
import dental_sealent from "@/../public/assets/dental_sealent.png";
import cleaning_hygeine from "@/../public/assets/cleaning_hygeine.png";
import xray from "@/../public/assets/xray.png";
import ServicesHeading from "./ServiceProviderHeading";

function ServicesProvided() {
	const servicesData = [
		{
			imgRight: false,
			imgSrc: dignostic_prevention,
			title: "Diagnostic & Prevention",
			description1:
				"We totally understand—life gets hectic, and it's easy to push dental check-ups down the list. But skipping your routine exams can lead to bigger, costlier issues later.",
			description2:
				"At MOD Dentist, our biannual visits help catch concerns early, saving you time, money, and discomfort. In just about an hour, we'll ensure your smile stays healthy and your visit stays comfortable with our expert preventive care.",
		},
		{
			imgRight: true,
			imgSrc: cleaning_hygeine,
			title: "Cleaning & Hygiene",
			description1:
				"Professional cleanings and regular hygiene appointments form the core of preventive dental care. At MOD Dentist, we carefully clean your teeth and gums, removing plaque, tartar, and debris from all surfaces—even the spots you can't reach at home. These appointments can also help reduce minor stains, leaving your smile fresher, brighter, and healthier. For most patients, we recommend visiting us every six months for optimal results.",
			description2:
				"But great oral care doesn't end at our office doors. Maintaining a strong at-home routine is just as essential. Brushing twice daily with a fluoride toothpaste and a soft-bristled toothbrush, paired with daily flossing—especially before bed—helps protect your teeth and gums between visits. Flossing clears away food particles and plaque your toothbrush can't reach, keeping your mouth fresh and cavity-free.",
		},
		{
			imgRight: false,
			imgSrc: xray,
			title: "Digital X-Rays",
			description1:
				"At MOD Dentist, we use advanced digital X-ray technology that's fast, safe, and comfortable for patients of all ages. These high-resolution images allow us to clearly view the structure of your teeth, gums, and jaw, helping us diagnose concerns early and plan the most effective treatments.",
			description2:
				"Digital X-rays use significantly less radiation than traditional film, offering peace of mind with every scan. While most patients only need one or two sets per year, we may recommend additional imaging if there's an emergency or a specific concern that requires closer examination.",
		},
		{
			imgRight: true,
			imgSrc: dental_sealent,
			title: "Dental Sealants",
			description1:
				"Though commonly linked with pediatric care, dental sealants offer excellent benefits for adults too. These thin, protective coatings are applied to the deep grooves of your back teeth—where brushing can’t always reach and cavities often begin. Sealants form a smooth, nearly invisible barrier that helps block out food particles and bacteria, reducing the risk of decay. The process is quick, painless, and long-lasting, making it a smart preventive choice. If you're prone to cavities or simply want to stay ahead of dental issues, talk to us at MOD Dentist to see if sealants are the right fit for you.",
		},
		{
			imgRight: false,
			imgSrc: sedation,
			title: "Sedation Dentistry",
			description1:
				"Don't let dental anxiety hold you back from taking care of your smile. We understand that dental visits can be daunting, which is why we offer a variety of sedation options—from gentle nitrous oxide for mild anxiety to oral sedation, IV sedation for deeper relaxation, and even general anesthesia for complex procedures—to ensure you have a comfortable, pain-free experience, regardless of your treatment's complexity. ",
			description2:
				"Interested in learning more about our sedation methods? Contact us today, and we'll help you find the best option to suit your needs.",
		},
		{
			imgRight: true,
			imgSrc: periodontal,
			title: "Periodontal Care",
			description1:
				"At MOD Dentist, we focus on keeping your gums healthy through dedicated periodontal care. Our services include everything from regular cleanings and thorough evaluations to advanced treatments for gum disease. We take a proactive approach—educating you on proper oral hygiene and offering personalized care plans—to protect your smile and support your overall well-being. Healthy gums are the foundation of a healthy life, and we're here to help you maintain both.",
		},
		{
			imgRight: false,
			imgSrc: soft_tissue_laser,
			title: "Soft Tissue Laser",
			description1:
				"Oral surgery and gum treatments don't have to be intimidating. At MOD Dentist, we use advanced soft-tissue laser technology to perform a variety of procedures with precision, comfort, and minimal invasiveness. This cutting-edge approach allows for faster healing, less discomfort, and often eliminates the need for traditional surgical tools. ",
			description2:
				"Want to know if laser dentistry is right for you? Contact us today to learn more about its many benefits.",
		},
	];

	return (
		<>
			<ServicesHeading />
			{servicesData.map((service, index) => (
				<Services
					key={index * 23}
					imgRight={service.imgRight}
					imgSrc={service.imgSrc}
					title={service.title}
					description1={service.description1}
					description2={service.description2}
				/>
			))}
		</>
	);
}

export default ServicesProvided;