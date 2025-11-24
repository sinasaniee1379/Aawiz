"use client";

import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // جلوگیری از Hydration Error
  useEffect(() => {
    if (mounted) {
      setEnabled(theme === "dark");
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-black dark:text-white">
        {enabled ? "Dark" : "Light"}
      </span>

      <Switch
        checked={enabled}
        onChange={(val) => {
          setEnabled(val);
          setTheme(val ? "dark" : "light");
        }}
        className={` relative inline-flex h-6 w-11 items-center rounded-full transition bg-gray-900 dark:bg-gray-300`}>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
}
