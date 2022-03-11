type TError = {
  message: string;
  domain: string;
  reason: string;
}

export interface IState {
  items: IItem[] | null
  error?: {
    code: number,
    message: string
    errors: TError[]
    status: string
    details: []
  }
}

export interface IItem  {
  kind: string
  title: string
  htmlTitle: string
  link: string
  displayLink: string
  snippet: string
  htmlSnippet: string
  mime: string
  fileFormat: string
  image: {
      contextLink: string
      height: number
      width: number
      byteSize: number
      thumbnailLink: string
      thumbnailHeight: number
      thumbnailWidth: number
  } 
} 
