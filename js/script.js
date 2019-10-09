/*Прокрутка изображений в верхнум блоке страницы*/ 
var buttonTopPrev = document.querySelector('.top__arrow--prev');
var buttonTopNext = document.querySelector('.top__arrow--next');
var topArray = document.querySelectorAll('.slider__item');
var a = 0, b;
function topNext() {
	if((topArray.length - a) > 1)
	{	  			
		topArray[a].style.order = a+1;
		a++;
	}
};
function topPrev() {
 	if(a>0)
 	{
 		b = a - 1;
  		topArray[b].style.order = 0;
  		a--;
  	}
 };
buttonTopNext.addEventListener('click', topNext);
buttonTopPrev.addEventListener('click', topPrev);

/*Прокрутка изображений в блоке категорий товаров (тип коллекции)*/ 
var buttonTypesPrev = document.querySelector('.types__arrow--prev');
var buttonTypesNext = document.querySelector('.types__arrow--next');
var typesArray = document.querySelectorAll('.types__shop');
var c = 0, d;
function typesNext() {
 	var typesOpacity = getComputedStyle(typesArray[c]);
	if(typesOpacity.opacity === '1')
	{ 	
		if((typesArray.length - c) > 3)
	  		{	  			
			  	typesArray[c].style.order = c+1;
	  			c++;
	  		}
	} else if(typesOpacity.opacity === '0.99')
			{ 	
				if((typesArray.length - c) > 2)
			  		{	  			
					  	typesArray[c].style.order = c+1;
			  			c++;
			  		}
			}
		else { 	
				if((typesArray.length - c) > 1)
			  		{	  			
					  	typesArray[c].style.order = c+1;
			  			c++;
			  		}
			}
};
function typesPrev() {
 	if(c>0)
 	{
 		d = c - 1;
  		typesArray[d].style.order = 0;
  		c--;
  	}
 };
buttonTypesNext.addEventListener('click', typesNext);
buttonTypesPrev.addEventListener('click', typesPrev);

/*Прокрутка изображений в блоке товаров*/ 
var buttonProductsPrev = document.querySelector('.products__arrow--prev');
var buttonProductsNext = document.querySelector('.products__arrow--next');
var productsArray = document.querySelectorAll('.products__item');
var e = 0, f;
function productsNext() {
 	var productsOpacity = getComputedStyle(productsArray[e]);
 	if(productsOpacity.opacity === '1')
	{ 	
		if((productsArray.length - e) > 4)
	  		{	  			
			  	productsArray[e].style.order = e+1;
	  			e++;
	  		}
	} else if(productsOpacity.opacity === '0.99')
			{ 	
				if((productsArray.length - e) > 3)
			  		{	  			
					  	productsArray[e].style.order = e+1;
			  			e++;
			  		}
			} else if(productsOpacity.opacity === '0.98')
					{ 	
						if((productsArray.length - e) > 2)
					  		{	  			
							  	productsArray[e].style.order = e+1;
					  			e++;
					  		}
					}
				else { 	
						if((productsArray.length - e) > 1)
					  		{	  			
							  	productsArray[e].style.order = e+1;
					  			e++;
					  		}
					}
};
function productsPrev() {
 	if(e>0)
 	{
 		f = e - 1;
  		productsArray[f].style.order = 0;
  		e--;
  	}
 };
buttonProductsNext.addEventListener('click', productsNext);
buttonProductsPrev.addEventListener('click', productsPrev);

/*Прокрутка изображений в блоке товаров*/ 
var buttonBlogPrev = document.querySelector('.blog__arrow--prev');
var buttonBlogNext = document.querySelector('.blog__arrow--next');
var blogArray = document.querySelectorAll('.blog__item');
var g = 0, h;
function blogNext() {
 	var blogOpacity = getComputedStyle(blogArray[g]);
 	if(blogOpacity.opacity === '1')
	{ 	
		if((blogArray.length - g) > 2)
		{	  			
			blogArray[g].style.order = g+1;
			g++;
		}
	}	else  if((blogArray.length - g) > 1)
				{	  			
					blogArray[g].style.order = g+1;
					g++;
				}
};
function blogPrev() {
 	if(g>0)
 	{
 		h = g - 1;
  		blogArray[h].style.order = 0;
  		g--;
  	}
 };
buttonBlogNext.addEventListener('click', blogNext);
buttonBlogPrev.addEventListener('click', blogPrev);