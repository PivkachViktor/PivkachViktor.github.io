let search =
    ["хліб",
        "людина",
        "яблуко",
        "дерево",
        "нео",
        "груша"];
let searchImages =
    ["https://fayni-recepty.com.ua/wp-content/uploads/2023/01/domashniy-khlib-1024x683.jpg",
        "https://cdn.britannica.com/07/192107-050-CE043374/anatomy-charts-human-body-muscle-systems-skeletal.jpg?w=400&h=300&c=crop",
        "https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Sequoiadendron_giganteum_at_Kenilworth_Castle.jpg",
        "https://images.thevoicemag.ru/upload/img_cache/1d5/1d558aacb105a929c96d3f6ea3d7f29e_ce_1200x800x0x0_cropped_666x444.jpg",
        "https://calorizator.ru/sites/default/files/imagecache/product_512/product/pear.jpg"];

function searching(){
    console.log("Function work");
    let input = document.getElementById("input");
    console.log("Input = "+String(input.value));
    if(search.includes(String(input.value).toLowerCase())){
        let link = searchImages[search.indexOf(input.value.toLowerCase())];
        document.getElementById("sectionForImage").innerHTML = "<img src='"+link+"'>";
    }
}