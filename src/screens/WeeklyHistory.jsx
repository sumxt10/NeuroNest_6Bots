import React from "react";

const weeklyData = [
  { day: "Monday", episodes: 3, severity: "High", severityColor: "text-red-500" },
  { day: "Sunday", episodes: 2, severity: "Medium", severityColor: "text-orange-500" },
  { day: "Saturday", episodes: 1, severity: "Low", severityColor: "text-yellow-500" },
  { day: "Friday", episodes: 4, severity: "High", severityColor: "text-red-500" },
  { day: "Thursday", episodes: 2, severity: "Medium", severityColor: "text-orange-500" },
  { day: "Wednesday", episodes: 1, severity: "Low", severityColor: "text-yellow-500" },
  { day: "Tuesday", episodes: 3, severity: "High", severityColor: "text-red-500" },
];

const WeeklyHistory = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10">
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <button className="p-2 -ml-2">
            <svg
              className="text-gray-700 dark:text-gray-300"
              fill="currentColor"
              height="24"
              width="24"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </button>
          <h1 className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white pr-8">
            Weekly History
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="overflow-y-auto pb-24 p-4 space-y-4">
        {weeklyData.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex-1">
              <p className="text-sm text-primary font-bold">Today</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{item.day}</p>
              <p className={`text-sm text-gray-500 dark:text-gray-400`}>
                {item.episodes} episode{item.episodes > 1 ? "s" : ""},{" "}
                <span className={`font-semibold ${item.severityColor}`}>{item.severity} severity</span>
              </p>
            </div>
            <div
              className="w-16 h-16 rounded-lg bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBWrK-dg3RgecC9fDGv-A1c3wYhnGJOd4p2d6at5Nlr4J8ENUGFTfrLm67uM1Rt0wvtX6tT7JwzT4o4tU5SeKIc9Ao3GIg36PoFcHYwVLqjk0t57YIlQnJv-8n2YxBqI5PB7VGnBQnLTh4ysyz6TLdgwxDJjti4uwm_cS_7B1-onknpSL10a-89rwEJtcj2OV9FoFcsO1mYLuET3xF3OJkbglq7TMyp9kFF29Y91ZjHEai17ACnPsKh_0cPYAHcg8CQIiWrzgUSMU')",
              }}
            ></div>
          </div>
        ))}
      </main>

      {/* Footer / Bottom Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-around items-center px-4 pt-2 pb-3">
          {[
            { label: "Dashboard", icon: "home", active: false },
            { label: "History", icon: "history", active: true },
            { label: "Device Info", icon: "devices", active: false },
            { label: "Settings", icon: "settings", active: false },
          ].map((tab) => (
            <div
              key={tab.label}
              className={`flex flex-col items-center gap-1 ${
                tab.active ? "text-primary" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {/* Replace this with React Icons if needed */}
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                <path d="M..." /> {/* icon path */}
              </svg>
              <p className="text-xs font-medium">{tab.label}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default WeeklyHistory;
