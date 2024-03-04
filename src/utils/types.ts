export interface IEngagementStrategies {
     title: string,
     info: string,
     image: IImage
}

interface IImage {
     image: {
          asset:{
               url: string
          }
     }
}
