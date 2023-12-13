import { getCookie } from 'cookies-next'

export function getToken(): string | undefined {
    return getCookie('token')?.toString()
}