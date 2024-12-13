function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('Camisas')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "list-item"
        }
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const categoryHeader = document.querySelector('.category-header');
    const categoryContent = document.querySelector('.category-content');
    const container = document.querySelector('.categories-container');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const hiddenItems = document.querySelectorAll('.category-item.hidden');
    
    // Initial state - expanded
    categoryContent.style.maxHeight = categoryContent.scrollHeight + "px";
    
    // Toggle main category menu
    categoryHeader.addEventListener('click', function() {
        container.classList.toggle('collapsed');
        
        if (categoryContent.style.maxHeight) {
            categoryContent.style.maxHeight = null;
        } else {
            categoryContent.style.maxHeight = categoryContent.scrollHeight + "px";
        }
    });

    // Show more/less items
    let isExpanded = false;
    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        showMoreBtn.classList.toggle('active');
        
        if (isExpanded) {  
            showMoreBtn.innerHTML = 'Ver menos <span class="show-more-icon">▲</span>';
            hiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100); // Adds a slight delay between each item appearing
            });      
        } else {
            showMoreBtn.innerHTML = 'Ver mais <span class="show-more-icon">▼</span>';
            hiddenItems.forEach((item) => {
                item.classList.remove('show');
            });         
        }

        // Update content max-height after animation
        setTimeout(() => {
            categoryContent.style.maxHeight = categoryContent.scrollHeight + "px";
        }, 50);
    });
});




document.getElementById("toggleCategories").addEventListener("click", function () {
    const categoryList = document.querySelector(".category-list");
    const maxHeight = categoryList.style.maxHeight;
  
    if (!maxHeight || maxHeight === "0px") {
      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
    } else {
      categoryList.style.maxHeight = "0px";
    }
  });
  