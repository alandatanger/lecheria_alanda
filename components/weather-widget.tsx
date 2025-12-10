"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudRain, CloudSun, Sun, Wind, Droplets, Loader2, Snowflake, CloudLightning } from "lucide-react"

interface WeatherData {
    temperature_2m: number
    relative_humidity_2m: number
    weather_code: number
    wind_speed_10m: number
}

export function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch weather for Tanger
        fetch("https://api.open-meteo.com/v1/forecast?latitude=35.7595&longitude=-5.8340&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m")
            .then(res => res.json())
            .then(data => {
                setWeather(data.current)
                setLoading(false)
            })
            .catch(err => {
                console.error("Failed to fetch weather", err)
                setLoading(false)
            })
    }, [])

    if (loading) return <div className="p-4 flex justify-center text-amber-500"><Loader2 className="animate-spin w-8 h-8" /></div>
    if (!weather) return <div className="text-gray-500 text-sm">Météo indisponible</div>

    const getIcon = (code: number) => {
        if (code === 0) return <Sun className="text-amber-400 w-10 h-10 animate-[spin_10s_linear_infinite]" />
        if (code <= 3) return <CloudSun className="text-amber-200 w-10 h-10" />
        if (code <= 48) return <Cloud className="text-gray-400 w-10 h-10" />
        if (code <= 67) return <CloudRain className="text-blue-400 w-10 h-10" />
        if (code <= 77) return <Snowflake className="text-cyan-200 w-10 h-10" />
        if (code <= 99) return <CloudLightning className="text-purple-400 w-10 h-10" />
        return <Sun className="text-amber-400 w-10 h-10" />
    }

    const getWeatherLabel = (code: number) => {
        if (code === 0) return "Ensoleillé"
        if (code <= 3) return "Partiellement nuageux"
        if (code <= 48) return "Nuageux"
        if (code <= 67) return "Pluvieux"
        return "Variable"
    }

    return (
        <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md flex items-center justify-between gap-4 shadow-lg group hover:border-amber-500/30 transition-colors">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">Tanger</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-400/20">LIVE</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center gap-1" title="Vent"><Wind size={12} className="text-blue-500 dark:text-blue-300" /> {weather.wind_speed_10m} km/h</span>
                    <span className="flex items-center gap-1" title="Humidité"><Droplets size={12} className="text-blue-500 dark:text-blue-300" /> {weather.relative_humidity_2m}%</span>
                </div>
                <span className="text-xs text-amber-600 dark:text-amber-500/80 font-medium">{getWeatherLabel(weather.weather_code)}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                {getIcon(weather.weather_code)}
                <span className="text-2xl font-bold text-slate-900 dark:text-white dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:to-gray-400">{Math.round(weather.temperature_2m)}°C</span>
            </div>
        </div>
    )
}
