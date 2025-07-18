import Image from "next/image";

const Education = () => {
	return (
		<section className="bg-dental-cream py-16 px-6 lg:px-20">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Image Section */}
				<div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0">
					<div className="relative overflow-hidden rounded-xl shadow-2xl border border-dental-gold">
						<Image
							src="/assets/images/DE.png"
							alt="MOD Dentist team of four doctors"
							width={800}
							height={600}
							className="w-full h-full object-cover"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>

				{/* Text Section */}
				<div className="text-center lg:text-left  max-w-2xl m-20">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-dental-green mb-12">
						Advanced Dental <br /> Education & Expertise
					</h2>
					<p className="text-dental-green text-base leading-relaxed mb-6 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
						quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
						mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
						Vestibulum lacinia arcu eget nulla.
					</p>
					<p className="text-dental-green text-base leading-relaxed mb-8">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
						dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
						quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
						tristique sem.
					</p>
					<p className="text-dental-green text-base  leading-relaxed">
						Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
						iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
						ligula lacinia aliquet.
					</p>
					{/* Logos */}
					<div className="flex items-end justify-between lg:justify-start gap-15 mt-20 translate-x-27 scale-125">
						<Image
							src="/assets/images/AACA.png"
							alt="Clear Aligners"
							width={80}
							height={60}
							className="object-contain  h-10 w-auto"
						/>
						<Image
							src="/assets/images/CDA.png"
							alt="CDA"
							width={80}
							height={60}
							className="object-contain h-10 w-auto"
						/>
						<Image
							src="/assets/images/ADA.png"
							alt="ADA"
							width={80}
							height={60}
							className="object-contain h-10 w-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
