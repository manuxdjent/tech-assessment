import md5 from 'md5'

export function getBaseParams(): string {
    const timestamp = '1'
    const apiKeyhash = md5(`${timestamp}${process.env.NEXT_PUBLIC_PRIVATE_KEY}${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
    const urlSearchParams = new URLSearchParams({
        ts: timestamp,
        apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        hash: apiKeyhash
    })
    return `?${urlSearchParams.toString()}`
}