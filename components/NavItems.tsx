"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'My Journey', href: '/my-journey' },
    { label: 'Companions', href: '/companions' },
    { label: 'Sign In', href: '/sign-in' },
]
const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className='flex items-center gap-4'>
{
navItems.map(({label, href})=> (
<Link key={href} href={href} className={cn(pathname === href && 'text-primary font-semibold', 'hover:text-primary transition-colors')}>
    {label}
</Link>
))
}
    </nav>
  )
}

export default NavItems