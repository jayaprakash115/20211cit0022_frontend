let itemList = [
    {
        'image':'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_501548590_20200117171630.jpg',
        'title':'Kosha Mangsho',
        'description':'Kosha Mangsho is a traditional dish prepared of Mutton (Goat meat) in every Bengali house.',
        'price':'299/-'
    },
    {
        'image':'https://www.holidify.com/images/cmsuploads/compressed/Dhokla_20191010162234.jpg',
        'title':'Dhokla',
        'description':' Dhokla is an authentic snack which has originated from the state of Gujarat. This traditional food item is prepared out of gram flour and chana da',
        'price':'149/-'
    },
    {
        'image':'https://www.holidify.com/blog/wp-content/uploads/2014/06/Rogan-Josh.jpg',
        'title':' Rogan josh',
        'description':'Rogan Josh, an aromatic lamb dish is one of the signature recipes of Kashmiri cuisine.',
        'price':'199/-'
    },
    {
        'image':'https://www.holidify.com/images/cmsuploads/compressed/516038873_56694dc851_b_20190130091515.jpg',
        'title':'pongal',
        'description':'This is a staple meal during every auspicious festival of TamilNadu.',
        'price':'199/-'
    },
    {
        'image':'https://www.holidify.com/blog/wp-content/uploads/2015/09/Litti_chokha_dipped_in_Ghee.jpg',
        'title':'Litti Chokha',
        'description':'It consists of wheat and sattu with spices, kneaded into round spicy balls, dipped in ghee',
        'price':'199/-'
    },
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