/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBook {
    id: number
    title: string
    authors: IAuthor[]
    translators: any[]
    subjects: string[]
    bookshelves: string[]
    languages: string[]
    copyright: boolean
    media_type: string
    formats: IFormats
    download_count: number
  }
  
  export interface IAuthor {
    name: string
    birth_year: number
    death_year: number
  }
  
  export interface IFormats {
    "text/html": string
    "application/epub+zip": string
    "application/x-mobipocket-ebook": string
    "application/rdf+xml": string
    "image/jpeg": string
    "text/plain; charset=us-ascii": string
    "application/octet-stream": string
  }
  