import { Button } from "@/app/components/ui/button";
import { BarChart2, LineChart, Play, PieChart } from "lucide-react";

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <Button variant="outline" className="rounded-full mb-6 gap-2 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
              <Play size={16} className="text-blue-600" />
              <span>Watch Demo</span>
            </Button>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Create real-time dashboards without writing code
          </h1>
          <div className="pt-16">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Byte-learn helps teams turn live data into beautiful, customizable dashboards
              —no devs required. Share insights, not spreadsheets.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-md bg-black text-white dark:bg-white dark:text-black px-8 py-6 text-base font-medium">
                Build your first dashboard
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right side dashboard mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-[90%] max-w-lg aspect-[4/3] bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
            {/* Dashboard header */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-6 w-48 bg-gray-200 dark:bg-slate-700 rounded"></div>
              </div>
            </div>

            {/* Dashboard sidebar */}
            <div className="absolute top-12 left-0 bottom-0 w-16 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 flex flex-col items-center py-4 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-md bg-gray-200 dark:bg-slate-700"></div>
              ))}
            </div>

            {/* Dashboard content */}
            <div className="absolute top-12 left-16 right-0 bottom-0 overflow-hidden p-4">
              <div className="h-full flex flex-col space-y-4">
                {/* Stats row */}
                <div className="flex space-x-3 h-16">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 bg-blue-50 dark:bg-slate-700/50 rounded-lg p-2 flex flex-col justify-center">
                      <div className="h-2 w-12 bg-gray-300 dark:bg-slate-600 rounded mb-2"></div>
                      <div className="h-4 w-16 bg-blue-200 dark:bg-blue-700/50 rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Charts grid */}
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-3 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div className="h-3 w-20 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <PieChart className="w-16 h-16 text-blue-500 opacity-80" />
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-3 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div className="h-3 w-20 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <BarChart2 className="w-16 h-16 text-purple-500 opacity-80" />
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-3 flex flex-col col-span-2">
                    <div className="flex justify-between mb-2">
                      <div className="h-3 w-20 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                        <div className="h-3 w-3 bg-gray-200 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <LineChart className="w-24 h-16 text-green-500 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none"></div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}