export class Recommendation {
    tracks: Track[]
    seeds: Seed[]
}

export class Seed {
    initialPoolSize: number
    afterFilteringSize: number
    afterRelinkingSize: number
    href: string
    id: string
    type: string
}

export class Track {
    artists: Artist[]
    discNumber: number
    durationMs: number
    explicit: boolean
    external_urls: ExternalUrls
    href: string
    id: string
    isPlayable: boolean
    name: string
    previewUrl: string
    trackNumber: number
    type: string
    uri: string
}

export class Artist {
    externalUrls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export class ExternalUrls {
    spotify: string
}