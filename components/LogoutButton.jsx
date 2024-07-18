'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    
    const handleLogout = async () => {
        await signOut ({redirect: false})
    router.push('/loginform')
    }
    return (
        <div className="logout">
            <button onClick={handleLogout} className='logout-button'>Logout</button>
        </div>
    )
}

export default LogoutButton
