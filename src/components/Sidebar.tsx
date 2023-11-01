// Placeholder. Should derive from one of our custom Button components.
export function SidebarButton({}) {
    return (
        <></>
    )
}

export default function Sidebar({
    buttons
}: {
    buttons: React.ReactNode[]
}) {
    return (
    <div className="sidebar">
        {buttons}
    </div>
    )
}