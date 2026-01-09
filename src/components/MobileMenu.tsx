'use client'
import Link from 'next/link'
import { ChevronDown, MoveUpRight } from 'lucide-react'
import { useState } from 'react'

interface MenuItem {
    key: string
    name: string
    path?: string
    submenu?: MenuItem[]
}

export default function MobileMenuItem({
    item,
    level = 0,
    onClose,
}: {
    item: MenuItem
    level?: number
    onClose: () => void
}) {
    const [open, setOpen] = useState(false)
    const hasChildren = item.submenu && item.submenu.length > 0

    return (
        <div className="w-full">
            <div
                className={`flex items-center justify-between px-4 py-2 text-white cursor-pointer`}
                style={{ paddingLeft: `${16 + level * 12}px` }}
                onClick={() => {
                    if (hasChildren) setOpen(!open)
                    else onClose()
                }}
            >
                {item.path ? (
                    <Link href={item.path} onClick={onClose} className="flex-1">
                        {item.name}
                    </Link>
                ) : (
                    <span className="flex-1">{item.name}</span>
                )}

                {hasChildren && (
                    <ChevronDown
                        className={`transition-transform duration-200 ${open ? 'rotate-180' : ''
                            }`}
                        size={18}
                    />
                )}

                {!hasChildren && <MoveUpRight size={16} />}
            </div>

            {hasChildren && (
                <div
                    className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    {item.submenu!.map((child) => (
                        <MobileMenuItem
                            key={child.key}
                            item={child}
                            level={level + 1}
                            onClose={onClose}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
