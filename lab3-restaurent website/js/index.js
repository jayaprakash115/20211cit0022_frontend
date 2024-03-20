let itemList = [
    {
        'image':'https://www.holidify.com/blog/wp-content/uploads/2016/08/bab8f6309e6a0499821461364253e169.jpg',
        'title':' Vada',
        'description':'The popular South Indian recipe has been the favourite in kitchens of Andhra Pradesh, Karnataka and Tamil Nadu',
        'price':'49/-'
    },
    {
        'image':'https://www.holidify.com/blog/wp-content/uploads/2016/10/HyderabadiChickenBiryaniYT161123910435.jpg',
        'title':'Hyderabadi Biryani',
        'description':' Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items',
        'price':'149/-'
    },
    {
        'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Butter_Dosa_served_with_coconut_chutney_and_sambhar.jpg/330px-Butter_Dosa_served_with_coconut_chutney_and_sambhar.jpg',
        'title':'Dosa',
        'description':'A dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice.',
        'price':'99/-'
    },
    {
        'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.JPG/330px-Idli_Sambar.JPG',
        'title':'Idli',
        'description':'Idli is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka',
        'price':'49/-'
    },
    {
        'image':'https://upload.wikimedia.org/wikipedia/commons/a/a2/Lunch_at_saravan_bhavan.jpg',
        'title':'meal',
        'description':'Vegetarian south Indian meal served on banana leaf',
        'price':'99/-'
    }
   
];

let htmlItems='';
itemList.forEach((itemList)=>{
    htmlItems += `
    <div class="item1">
                <img src="${itemList.image} "alt="">
                <div class="item-details">
                    <p class="title">${itemList.title}</p>
                    <p class="description">${itemList.description}</p>
                    <div class="checkout" style="margin-top:40px;">
                        <p class="price">&#8377; ${itemList.price}</p>
                        <a href="./order.html"><p class="cart"><span>order now</span> <i class="fa-solid fa-truck"></i></p></a>
                        
                    </div>
                </div>
            </div>
    `
});
document.querySelector(".items").innerHTML=htmlItems;

