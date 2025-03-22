import * as SwitchPrimitive from "@radix-ui/react-switch";
import type React from "react";

import { cn } from "~/utils/css";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				"peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 h-6 w-11 shrink-0 grid place-content-center rounded-full shadow-realistic-hole transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"shadow-realistic-box bg-background dark:bg-primary-foreground pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(50%)] data-[state=unchecked]:translate-x-[calc(-50%)]",
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
