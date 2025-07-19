import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { libreBaskerville, poppins } from "@/lib/fonts";

interface ReviewCardProps {
	review: {
		id: number;
		name: string;
		text: string;
		rating: number;
		avatar: StaticImageData;
	};
}

export default function ReviewCard({ review }: Readonly<ReviewCardProps>) {
	return (
		<div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
			{/* Quote Icon */}
			<div className="mb-4">
				<svg
					className="w-8 h-8 text-[#B6A66A]"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
				</svg>
			</div>

			{/* Review Text */}
			<p className={"text-gray-700 text-base leading-relaxed mb-6 flex-grow" + " " + poppins.className}>
				{review.text}
			</p>

			{/* Bottom Section */}
			<div className="flex items-center justify-between">
				{/* User Info */}
				<div className="flex items-center space-x-3">
					<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
						<Image
							src={review.avatar || "/placeholder.svg"}
							alt={review.name}
							width={40}
							height={40}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<p className={"text-gray-800 text-sm font-medium" + " " + libreBaskerville.className}>
							{review.name}
						</p>
						<div className="flex items-center space-x-1">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-3 h-3 ${
										i < review.rating
											? "text-[#B6A66A] fill-current"
											: "text-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Google Logo */}
				<div className="flex-shrink-0">
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
					>
						<path
							fill="#4285F4"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="#34A853"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="#FBBC05"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="#EA4335"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
