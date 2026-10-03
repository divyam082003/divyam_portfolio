import {
  FaJava,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaAndroid,
  FaTools,
  FaUsers,
  FaLightbulb,
  FaChartBar
} from "react-icons/fa";

const skills = {
  Languages: [
    { name: "Java", icon: FaJava, color: "#F89820" },
    { name: "Kotlin", icon: FaCode, color: "#7F52FF" },
    { name: "C", icon: FaCode, color: "#2563EB" },
    { name: "C++", icon: FaCode, color: "#2563EB" },
  ],

  "App Development": [
    { name: "Android SDK", icon: FaAndroid, color: "#3DDC84" },
    { name: "Jetpack Compose", icon: FaAndroid, color: "#3DDC84" },
    { name: "React Native", icon: FaAndroid, color: "#61DAFB" },
    { name: "MVVM", icon: FaCode, color: "#8B5CF6" },
  ],

  "Database & Backend": [
    { name: "SQL", icon: FaDatabase, color: "#60A5FA" },
    { name: "SQLite", icon: FaDatabase, color: "#0F80CC" },
    { name: "Room Database", icon: FaDatabase, color: "#60A5FA" },
    { name: "Firebase", icon: FaDatabase, color: "#FFCA28" },
    { name: "Cloud Firestore", icon: FaDatabase, color: "#FFCA28" },
    { name: "Supabase", icon: FaDatabase, color: "#3ECF8E" },
  ],

  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    { name: "Android Studio", icon: FaTools, color: "#3DDC84" },
    { name: "VS Code", icon: FaTools, color: "#007ACC" },
  ],

  "Data & Analytics": [
    { name: "Microsoft Excel", icon: FaDatabase, color: "#217346" },
    { name: "Google Sheets", icon: FaDatabase, color: "#34A853" },
    { name: "BigQuery", icon: FaDatabase, color: "#4285F4" },
    { name: "Looker Studio", icon: FaChartBar, color: "#F9AB00" },
  ],

  Competencies: [
    { name: "Problem Solving", icon: FaLightbulb, color: "#FACC15" },
    { name: "Analytical Thinking", icon: FaLightbulb, color: "#FACC15" },
    { name: "Communication", icon: FaUsers, color: "#8B5CF6" },
    { name: "Team Collaboration", icon: FaUsers, color: "#8B5CF6" },
    { name: "Adaptability", icon: FaUsers, color: "#8B5CF6" },
  ],
};

export default skills;
