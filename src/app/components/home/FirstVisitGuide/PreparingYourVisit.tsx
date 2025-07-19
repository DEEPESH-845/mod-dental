import { raleway, poppins, libreBaskerville, inter } from "@/lib/fonts";

// Data for the preparation steps.
// Using a data array makes the component cleaner, more maintainable,
// and easier to update or scale in the future.
const visitSteps = [
	{
		number: "01",
		title: "Complete Patient Forms Online",
		description:
			"Skip the waiting room paperwork. Fill out your secure patient forms online at your convenience, so you can breeze through check-in and spend more time with your dentist.",
	},
	{
		number: "02",
		title: "Bring Your ID and Insurance Info",
		description:
			"If you have dental insurance, don't forget to bring your card or insurance information. This helps us maximize your benefits and streamline the process.",
	},
	{
		number: "03",
		title: "Arrive a Few Minutes Early",
		description:
			"A few extra minutes gives you time to settle in, enjoy the relaxing atmosphere, and begin your visit feeling calm and unhurried.",
	},
];

/**
 * PreparingForVisit Component
 *
 * This component renders a section that guides new patients on how to prepare for their first visit.
 * It is designed to be visually appealing and informative, breaking down the process into three simple steps.
 *
 * Key Features:
 * - Responsive Design: Adapts from a single-column layout on mobile to a three-column grid on larger screens.
 * - Themed Styling: Utilizes the custom color palette and fonts defined in `tailwind.config.js` for brand consistency.
 * - Data-Driven Content: Step information is mapped from an array, promoting code reusability and easy maintenance.
 * - Professional & Clean: The code is well-commented, structured, and follows best practices for React and Next.js development.
 *
 *  A section element containing the preparation guide.
 */
const PreparingForVisit = () => {
	return (
		// Main section container using the 'dental-cream' background from the theme.
		// 'section-padding' is a custom class from globals.css for consistent vertical and horizontal padding.
		<section className="bg-dental-cream section-padding">
			<div className="container-custom">
				{/* Section header with a centered title and subtitle */}
				<header
					className={
						"text-center max-w-4xl mx-auto mt-15 mb-16" +
						" " +
						raleway.className
					}
				>
					<h2
						className={
							" text-4xl md:text-5xl font-normal text-dental-green tracking-wide"
						}
					>
						Preparing for Your{" "}
						<span
							className={"text-dental-gold" + " " + libreBaskerville.className}
						>
							Visit
						</span>
					</h2>
					<p
						className={
							"text-dental-gray/80 mt-6 text-base text-center md:text-lg max-w-4xl mx-auto" +
							" " +
							poppins.className
						}
					>
						Your comfort starts before you even arrive, let&apos;s make your
						first visit feel like coming home. Here&apos;s how to prepare for a
						smooth, stress-free experience made just for you.
					</p>
				</header>

				{/* Grid container for the steps. It includes top and bottom borders for definition. */}
				{/* On mobile, it's a single column with horizontal dividers (`divide-y`). */}
				{/* On medium screens and up, it becomes a 3-column grid with vertical dividers (`md:divide-x`). */}
				<div className="border-t border-b border-dental-green/40 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dental-green/40 mb-15">
					{visitSteps.map((step) => (
						// Each step is a flex container, centered, with padding for spacing.
						<article
							key={step.number}
							className="flex flex-col items-center text-center p-8 lg:p-12"
						>
							{/* The large, semi-transparent step number, styled to act as a background element. */}
							<span
								className={
									"text-8xl font-bold text-dental-gray-light/50" +
									" " +
									inter.className
								}
							>
								{step.number}
							</span>

							{/* The title of the step. A negative vertical translation is used to slightly overlap with the number above it, matching the design. */}
							<h3
								className={
									" text-2xl lg:text-3xl font-medium text-dental-green mt-10 -translate-y-4" +
									" " +
									libreBaskerville.className
								}
							>
								{step.title}
							</h3>

							{/* The descriptive text for the step, with a max-width for readability. */}
							<p
								className={
									"text-dental-gray/80 mt-2 max-w-xs text-base text-center" +
									" " +
									poppins.className
								}
							>
								{step.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default PreparingForVisit;
