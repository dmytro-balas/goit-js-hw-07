      const categoriesList = document.getElementById('categories');
      const categoryItems = categoriesList.querySelectorAll('li.item');
      console.log(`Total categories: ${categoryItems.length}`);
      categoryItems.forEach((item) => {
        const categoryTitle = item.querySelector('h2').textContent;
        const categoryElements = item.querySelectorAll('ul > li');
        console.log(`${categoryTitle} - ${categoryElements.length} items`);
      });