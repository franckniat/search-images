"use client"
import Link from "next/link";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import SearchForm from "@/components/Search";

export default  function Navbar(){
    const {theme, setTheme} = useTheme();
    const handleThemeChange = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return(
        <nav className="fixed w-full bg-white dark:bg-neutral-950 z-50">
            <div className="mx-auto max-w-[1400px] px-6">
                <div className="flex items-center justify-between h-[70px]">
                    <Link href="/">
                        <h1 className="text-2xl">Pexels clone</h1>
                    </Link>
                    <div className="max-w-xl w-full">
                        <SearchForm/>
                    </div>
                    <div>
                        <Button onClick={handleThemeChange} className="relative rounded-full" variant="outline" size="icon">
                            <Moon className="scale-0 dark:scale-100 transition" size={20}/>
                            <Sun className="absolute scale-100 dark:scale-0 transition" size={20}/>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}