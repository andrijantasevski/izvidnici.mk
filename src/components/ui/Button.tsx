import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva(
  [
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "border",
    "inline-flex",
    "items-center",
    "justify-center",
  ],
  {
    variants: {
      /**
       * Controls the button according to the design system.
       */
      variant: {
        primary: [
          "bg-primary",
          "text-primary-content",
          "border-transparent",
          "hover:bg-primary-focus",
          "focus:ring-primary-focus",
        ],
        secondary: [
          "bg-secondary",
          "text-secondary-content",
          "border-transparent",
          "hover:bg-secondary-focus",
          "focus:ring-secondary-focus",
        ],
        // TODO
        // FIX HOVER
        "secondary-underlined": [
          "bg-transparent",
          "text-base-100",
          "border-b-secondary",
          "border-b-2",
        ],
        white: [
          "bg-base-100",
          "text-base-content",
          "border-transparent",
          "hover:bg-base-200",
          "focus:ring-base-content",
        ],
        "outline-white": [
          "bg-transparent",
          "border-base-100",
          "text-base-100",
          "hover:text-base-200",
          "focus:ring-base-content",
        ],
        error: [
          "bg-error",
          "text-error-content",
          "border-transparent",
          "hover:bg-error-focus",
          "focus:ring-error-focus",
        ],
        loading: ["bg-primary-50", "text-white"],
        disabled: [
          "bg-gray-100",
          "text-gray-400",
          "cursor-auto",
          "border-transparent",
        ],
      },
      /**
       * The size of the button.
       */
      size: {
        sm: ["text-sm", "py-1", "px-2"],
        base: ["text-base", "py-2", "px-4"],
        lg: ["text-base", "py-3", "px-4"],
      },
      /**
       * The level of rounding or curvature of the button.
       */
      rounding: {
        none: ["rounded-none"],
        /**
         * Little to no border radius, resulting in sharp corners and a more angular appearance.
         */
        square: ["rounded-sm"],
        /**
         * Moderate border radius, creating slightly rounded corners and a softer visual aesthetic.
         */
        rounded: ["rounded-lg"],
        /**
         * Significant border radius, making the corners more rounded and giving the button a pill-shaped appearance.
         */
        pill: ["rounded-xl"],
      },
      /**
       * Whether the text in the button is uppercase or not.
       */
      uppercase: {
        true: ["uppercase"],
      },
      /**
       * The weight of the text in the button.
       */
      fontWeight: {
        normal: ["font-normal"],
        medium: ["font-medium"],
        bold: ["font-bold"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      rounding: "rounded",
      fontWeight: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      uppercase,
      rounding,
      fontWeight,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={twMerge(
          buttonVariants({ variant, size, uppercase, rounding, fontWeight }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
