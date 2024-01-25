"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>

        <TabsTrigger value="dark" onClick={() => setTheme("light")}>
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>

        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
