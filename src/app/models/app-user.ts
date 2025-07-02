export interface AppUser {
    id: string,
    imgPath: string,
    username: string,
    createdTweetIDs: string[],
    likedTweetIDs: string[],
    dislikedTweetIDs: string[],
};
