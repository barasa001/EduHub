import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";  // Utility to combine class names

// Define backgroundVariants to generate class names dynamically
const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        success: "bg-emerald-100",
      },
      size: {
        default: "p-2",
        sm: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define iconVariants to generate icon size class names dynamically
const iconVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "text-sky-700",
        success: "text-emerald-700",
      },
      size: {
        default: "h-8 w-8",
        sm: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Use VariantProps from class-variance-authority to type props
type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

// Interface for IconBadge component props
interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: LucideIcon;  // The icon component to render
}

// IconBadge functional component
export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    // Apply backgroundVariants and iconVariants to generate dynamic class names
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  );
};
