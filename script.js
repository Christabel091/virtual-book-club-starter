const reviewLists = document.querySelector('#reviews-list');
let loadReviews = () => {
    for (const review of reviews){
        let review_list = createReview(review);
        reviewLists.appendChild(review_list);
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    loadReviews();
})

let handleReviewWubmit = () =>{
    console.log();
}
const createReview = (review) =>{
    console.log(review);
    const review_list = document.createElement('div');
    review_list.className =  'review-list'
    review_list.innerHTML = `
    
    <p class = 'nook-title'>${review.title}</p>
    <p>${review.reviewText}</p>
    <p> rating: ${review.rating}</p>
    <button>Likes: ${review.likes}<button/>
    <button>reposts: ${review.reposts}<button/>`
    return review_list;
}