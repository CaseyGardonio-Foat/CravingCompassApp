/*Restaurant model copies structure of Data objects returned from Documenu Menu Item Search Geo API;
only relevant details are retained, non-relevant details are commented out so they can be easily added back in if needed in the future */

export class Restaurant {
  public address: {
    city: string,
    state: string,
    postal_code: string,
    street: string,
    formatted: string,
  };
  // public cuisines: string[];
  // public geo: {
  //   lat: number,
  //   lon: number,
  // }; 
  // public imagePath: string;
  // public keyWords: string[];
  // public item_id: string;
  public menu_item_description: string;
  public menu_item_name: string;
  public menu_item_price: number;
  // public menu_item_pricing: [
  //   {
  //     price: number,
  //     currency: string,
  //     priceString: string,
  //   }
  // ];
  // public price_range: string;
  public restaurant_hours: string;
  // public restaurant_id: number;
  public restaurant_name: string;
  public restaurant_phone: string;
  // public subsection: string;
  // public subsection_description: string;
  public menus: []

  constructor(
    address: {city: string, state: string, postal_code: string, street: string, formatted: string},   
    menu_item_description: string,
    menu_item_name: string,
    menu_item_price: number,
    restaurant_hours: string,
    restaurant_name: string,
    restaurant_phone: string) {
      this.address = address;
      this.menu_item_description = menu_item_description;
      this.menu_item_name = menu_item_name;
      this.menu_item_price = menu_item_price;
      this.restaurant_hours = restaurant_hours;
      this.restaurant_name = restaurant_name;
      this.restaurant_phone = restaurant_phone
    }
}

