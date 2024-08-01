let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    
    // console.log(services);

    // Додаємо нову послугу
    services["Розбити скло"] = "200 грн";
    // console.log(services);
    
    services.price = function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let priceStr = this[key].split(" ")[0]; // Отримуємо числову частину
        let price = parseInt(priceStr); // Конвертуємо в число
        total += price; // Додаємо до загальної вартості
      }
    }
    return total;
  };
    
    services.minPrice = function(){
            let min = this.price(); // Встановлюємо початкове значення як загальну вартість
            for (let key in this) {
              if (typeof this[key] === "string") {
                let priceStr = this[key].split(" ")[0]; // Отримуємо числову частину
                let price = parseInt(priceStr); // Конвертуємо в число
                if (price < min) {
                  min = price; // Оновлюємо мінімальну ціну
                }
              }
            }
            return min; // Повертаємо мінімальну ціну
          };
    
    services.maxPrice = function() {
            let maxPrice = 0;
            for (let key in this) {
              if (typeof this[key] === "string") {
                let priceStr = this[key].split(" ")[0]; // Отримуємо числову частину
                let price = parseInt(priceStr); // Конвертуємо в число
                if (price > maxPrice) {
                  maxPrice = price; // Оновлюємо максимальну ціну
                }
              }
            }
            return maxPrice; // Повертаємо максимальну ціну
        };
    
    
    console.log("Total price:", services.price() + " грн"); 
    console.log("Min price:", services.minPrice() + " грн"); 
    console.log("Max price:", services.maxPrice() + " грн");
    
    
    