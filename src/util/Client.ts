import { getCookie, setCookie } from 'cookies-next'

export function getToken(): string | undefined {
    return getCookie('token')?.toString()
}

export function setToken(token: string): void {
    setCookie('token', token)
}