import * as React from "react"
import { cn } from "../utils/cn"

interface SplashScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const SplashScreen = React.forwardRef<HTMLDivElement, SplashScreenProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
SplashScreen.displayName = "SplashScreen"

const SplashLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center mb-8",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
SplashLogo.displayName = "SplashLogo"

const SplashTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-4xl font-bold text-gray-900 text-center mb-4",
      className
    )}
    {...props}
  />
))
SplashTitle.displayName = "SplashTitle"

const SplashDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg text-gray-600 text-center mb-8 max-w-md",
      className
    )}
    {...props}
  />
))
SplashDescription.displayName = "SplashDescription"

const SplashActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-4 w-full max-w-sm",
      className
    )}
    {...props}
  />
))
SplashActions.displayName = "SplashActions"

export { 
  SplashScreen, 
  SplashLogo, 
  SplashTitle, 
  SplashDescription, 
  SplashActions 
}
