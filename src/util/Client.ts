import { getCookie } from 'cookies-next'

export function getToken(): string {
    return getCookie('token')?.toString() || "..."
}