'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const LogoutButton = () => {
    const router = useRouter();
    
    const handleLogout = async () => {
        await signOut ({redirect: false})
    router.push('/loginform')
    }
    return (
        <button onClick={handleLogout} className='logout-button'>Logout Porra</button>
    )
}

export default LogoutButton
