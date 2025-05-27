import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Play } from 'lucide-react'; // Assuming you use lucide-react for icons

const Hero = () => {
  return (
    <div className='container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='flex flex-col md:flex-row items-start justify-start text-left space-y-10 md:space-y-0 md:space-x-10'>
            {/* left side */}
           <div className="md:w-2/3 lg:w-1/2 space-y-8">
          <div>
            <Button variant="outline" className="rounded-full mb-6 gap-2 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700">
              <Play size={16} className="text-black dark:text-white" />
              <span>Watch Demo</span>
            </Button>
          </div>
          <h1 className="text-xl md:text-6xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
            Create real-time dashboards without writing code
          </h1>
          <div className="pt-8 md:pt-10">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Lensboard helps teams turn live data into beautiful, customizable dashboards
              —no devs required. Share insights, not spreadsheets.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-md px-8 py-3 text-lg">
                Build your first dashboard <span className="ml-2">➔</span>
              </Button>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
