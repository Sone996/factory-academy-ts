export interface Login {
    email: string
    password: string
}

export interface Register {
    name: null,
    surname: null,
    email: null,
    password: null,
    role: null
}
export interface ModelData {
    name: string | null
    data?: {} | null
}

export interface BuyCourse {
    id: number | null,
    comment: string | null
}

// export interface Profile {
//     username: string;
//     bio?: string;
//     image?: string;
//     following: boolean;
//   }
  
//   export interface User {
//     email: string;
//     token: string;
//     username: string;
//     bio?: string;
//     image?: string;
//   }
  
//   export interface UserForUpdate {
//     email?: string
//     username?: string
//     bio?: string
//     password?: string
//     image?: string
//   }
  
//   export interface Article {
//     slug: string;
//     title: string;
//     description: string;
//     body: string;
//     tagList?: (string)[] | null;
//     createdAt: string;
//     updatedAt: string;
//     favorited: boolean;
//     favoritesCount: number;
//     author: Author;
//   }
//   export interface Author {
//     username: string;
//     bio: string;
//     image: string;
//     following: boolean;
//   }
  
//   export interface UserSubmit {
//     email: string;
//     password: string;
//   }
  
//   export interface UserResponse {
//     user: User;
//   }
  
//   export interface ProfileResponse {
//     profile: Profile;
//   }
  
//   export interface ArticlesResponse {
//     articles?: (Article)[] | null;
//     articlesCount: number;
//   }