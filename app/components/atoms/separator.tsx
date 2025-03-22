import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type React from "react";

import { cn } from "~/utils/css";

function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator-root"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"rounded-full shadow-realistic-depression shrink-0 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
				className,
			)}
			{...props}
		/>
	);
}

export { Separator };
