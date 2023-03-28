export interface Blog {
    id: number, 
    title: string, 
    content: string, 
    author: string, 
    upvote: number,
    downvote: number,  
    
}


export interface Image {
    id: number, 
    author: string, 
    width: number, 
    height: number, 
    url: string, 
    download_url: string
}


