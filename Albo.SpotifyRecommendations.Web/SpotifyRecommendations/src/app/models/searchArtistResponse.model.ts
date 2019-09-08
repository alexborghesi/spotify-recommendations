
export class SearchArtistResponse {
    
    artists: SearchArtistCollection;
}

export class SearchArtistCollection {

    href: string;
    items: Artist[];
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
}

export class Artist {

    externalUrls: ExternalUrls
    genres: any[]
    href: string
    id: string
    images: Image[]
    name: string
    popularity: number
    type: string
    uri: string
}

export class ExternalUrls {
    spotify: string
}

export class Image {
    height: number
    url: string
    width: number
}
