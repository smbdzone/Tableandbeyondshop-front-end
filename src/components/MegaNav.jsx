import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'; // Make sure to install react-icons
import car2 from '../assets/car2.png';

const MegaNav = () => {
    const megaMenuItems = [
        {
          title: 'Dining',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Dining Sets', 'Dining Chairs', 'Tableware', 'Utensils', 'Glassware', 'Serveware'],
            },
            {
              title: 'Brands',
              links: ['Brand 1', 'Brand 2', 'Brand 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Bed & Bath',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Bed Linen', 'Bath Towels', 'Pillows', 'Blankets', 'Mattresses'],
            },
            {
              title: 'Brands',
              links: ['Brand A', 'Brand B', 'Brand C'],
            },
          ],
          img:car2
        },
        {
          title: 'Drinking Accessories',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Cocktail Glasses', 'Wine Openers', 'Bar Tools', 'Mugs', 'Flasks'],
            },
            {
              title: 'Brands',
              links: ['Brand X', 'Brand Y', 'Brand Z'],
            },
          ],
          img:car2
        },
        {
          title: 'Cigar Room',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Cigars', 'Humidors', 'Cigar Cutters', 'Ashtrays'],
            },
            {
              title: 'Brands',
              links: ['Brand Cigar 1', 'Brand Cigar 2', 'Brand Cigar 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Cheese Room',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Cheese Boards', 'Cheese Knives', 'Cheese Markers'],
            },
            {
              title: 'Brands',
              links: ['Brand Cheese 1', 'Brand Cheese 2', 'Brand Cheese 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Lighting',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Pendant Lights', 'Table Lamps', 'Chandeliers'],
            },
            {
              title: 'Brands',
              links: ['Brand Lighting 1', 'Brand Lighting 2', 'Brand Lighting 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Kitchen',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Cookware', 'Cutlery', 'Appliances'],
            },
            {
              title: 'Brands',
              links: ['Brand Kitchen 1', 'Brand Kitchen 2', 'Brand Kitchen 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Party Necessities',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Party Decor', 'Drinkware', 'Serveware'],
            },
            {
              title: 'Brands',
              links: ['Brand Party 1', 'Brand Party 2', 'Brand Party 3'],
            },
          ],
          img:car2
        },
        {
          title: 'On-the-Go',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Travel Mugs', 'Lunch Boxes', 'Reusable Bags'],
            },
            {
              title: 'Brands',
              links: ['Brand On-the-Go 1', 'Brand On-the-Go 2', 'Brand On-the-Go 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Baby & Kids',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Baby Gear', 'Toys', 'Kids Furniture'],
            },
            {
              title: 'Brands',
              links: ['Brand Baby & Kids 1', 'Brand Baby & Kids 2', 'Brand Baby & Kids 3'],
            },
          ],
          img:car2
        },
        {
          title: 'Gift Ideas',
          categories: [
            {
              title: 'Shop By Category',
              links: ['Gift Baskets', 'Personalized Gifts', 'Gift Cards'],
            },
            {
              title: 'Brands',
              links: ['Brand Gift Ideas 1', 'Brand Gift Ideas 2', 'Brand Gift Ideas 3'],
            },
          ],
          img:car2
        },
      ];
      
      const [activeMenu, setActiveMenu] = useState(null);

      const handleMouseEnter = (index) => {
        setActiveMenu(index);
      };
    
      const handleMouseLeave = () => {
        setActiveMenu(null);
      };
    
      return (
        <nav className="flex justify-between items-center py-4 bg-[#A19C97] text-white  relative  ">
          <div className="flex justify-center gap-[46px] space-x-4 ml-10">
            {megaMenuItems.map((item, index) => (
              <div
                key={index}
                className=" text-[18px] p-[-2px]"
                onMouseEnter={() => handleMouseEnter(index)}
                
              >
                <button className="cursor-pointer flex items-center">
                  {item.title}
                   {/* <FaAngleDown className="ml-1" /> */}
                </button>
                {activeMenu === index && (
                  <div className="absolute top-full left-[5%] bg-white text-gray-800 shadow-lg p-4  z-10 w-[90%]" onMouseLeave={handleMouseLeave}>
                    <div className="flex justify-between space-x-8" >
                      {item.categories.map((category,categoryIndex) => (
                        <>
                         <div key={`${index}-${categoryIndex}`}>
                          <h2 className="font-semibold">{category.title}</h2>
                          <ul>
                            {category.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a href="#" className="block">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                          
                        </div>
                      
                        </>
                      ))}
                      <div>
                      <img src={car2} alt="" />
                      </div>
                    </div>
                    
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      );
    };
export default MegaNav;
