export interface ReviewModel {
    reviewId: number;
    desc: string;
    likes: number;
    dislikes: number;
    userId: string;
    productId: string;
    media: string[];
}
