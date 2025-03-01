import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
   <TabsPrimitive.List
      ref={ref}
      className={cn(
         "grid w-full grid-cols-2 items-center justify-center rounded-lg bg-black p-1 text-white shadow-md",
         className
      )}
      {...props}
   />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
   <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
         "flex items-center justify-center py-3 px-6 text-lg font-semibold transition-all duration-300",
         "rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-1",
         "data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:border-2 data-[state=active]:border-white",
         "bg-gray-800 text-white hover:bg-gray-700",
         className
      )}
      {...props}
   />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
   <TabsPrimitive.Content
      ref={ref}
      className={cn(
         "mt-2 p-4 rounded-lg bg-white shadow-md ring-offset-background",
         "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
         className
      )}
      {...props}
   />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
