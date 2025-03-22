import { Button } from "~/components/atoms/button";
import { Card } from "~/components/atoms/card";
import { Switch } from "~/components/atoms/switch";
export function Gallery() {
	return (
		<>
			<div className="hidden md:block w-172 h-64 relative">
				<Card className="absolute top-0 right-22 w-128 h-32 z-10 grid place-content-center">
					<div className="p-4 font-bold text-2xl">
						Make Your Component Realistic
						<br /> with One Utility Class
					</div>
				</Card>
				<div className="absolute top-16 left-0 shadow-realistic-depression w-48 h-48 rounded-xl bg-background p-2">
					<div className="shadow-realistic-mound w-full h-full rounded-md bg-background p-4" />
				</div>
				<div className="absolute bottom-8 right-0 shadow-realistic-hole w-48 h-48 rounded-xl p-2 bg-secondary" />
				<Switch className="absolute bottom-0 right-64" />
				<Button className="absolute bottom-12 left-60 bg-secondary" variant="outline">
					Button
				</Button>
			</div>
			<div className="block md:hidden w-full h-64 relative">
				<Card className="relative w-10/12 m-auto h-32 z-20 grid place-content-center">
					<div className="p-4 font-bold text-2xl">
						Make Your
						<br /> Component Realistic
						<br /> with One Utility Class
					</div>
				</Card>
				<div className="absolute top-16 left-0 shadow-realistic-depression w-48 h-48 rounded-xl bg-background p-2">
					<div className="shadow-realistic-mound w-full h-full rounded-md bg-background p-4" />
				</div>
				<div className="absolute bottom-8 right-0 shadow-realistic-hole w-48 h-48 rounded-xl p-2 bg-secondary" />
				<Switch className="absolute bottom-16 left-8" />
				<Button className="absolute bottom-12 right-8 bg-secondary" variant="outline">
					Button
				</Button>
			</div>
		</>
	);
}
