import md5 from 'md5'

export function getBaseParams(): string {
    const apiKeyhash = md5(`${process.env.NEXT_PUBLIC_TIMESTAMP}${process.env.NEXT_PUBLIC_PRIVATE_KEY}${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
    const urlSearchParams = new URLSearchParams({
        ts: process.env.NEXT_PUBLIC_TIMESTAMP,
        apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        hash: apiKeyhash
    })
    return `?${urlSearchParams.toString()}`
}