"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisProviderProps {
	children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1, // Faster interpolation for responsiveness
				duration: 2, // Shorter duration for snappier feel
				smoothWheel: true, // Desktop smooth scrolling
				syncTouch: true, // Sync touch events properly
				syncTouchLerp: 0.12, // Faster touch sync
				touchMultiplier: 2.5, // Enhanced touch sensitivity for premium feel
				wheelMultiplier: 0.7, // Slightly faster wheel
				gestureOrientation: "vertical",
				autoRaf: true,
				infinite: false,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
				prevent: (node) => node.classList.contains("no-lenis"),
			}}
		>
			{children}
		</ReactLenis>
	);
}
