export interface TweetModel {
    id: string,
    text: string,
    creatorID: string,
    likedUserIDs: string[],
    dislikedUserIDs: string[],
    parentTweetID: string,
    commentIDs: string[],
}
