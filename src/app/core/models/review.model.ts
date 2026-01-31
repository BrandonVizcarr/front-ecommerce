export interface ReviewModel {
    reviewId: number;
    desc: string;
    likes: number;
    dislikes: number;
    userId: string;
    productId: string;
    media: string[];
    user: UserReview;
}

export interface UserReview {
    userId: string;
    name: string;
    lastName: string;
    profileImg: string | null;
}
