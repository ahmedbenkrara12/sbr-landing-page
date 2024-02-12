'use client'
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation" 
import { useTransition } from "react"

export default function ChangeLang(){
    const activeLang = useLocale()
    const [isPending, startTransition] = useTransition()
    
    const router = useRouter()
    const handleSelectChange = (e) => {
        const lang = e.target.value
        startTransition(() => {
            router.replace(`/${lang}`)
        })
    }
 
    return(
        <select onChange={handleSelectChange} defaultValue={activeLang} name="" id="">
            <option value="en">English</option>
            <option value="ar">العربية</option>
        </select>
    )
}