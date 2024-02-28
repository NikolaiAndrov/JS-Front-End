function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      class Restaurant {
         constructor(name) {
            this.name = name;
            this.workers = [];
         }

         averageSalary() {
            let sum = 0;

            for (const currentWorker of this.workers) {
               sum += currentWorker.salary;
            }

            return sum / this.workers.length;
         }

         maxSalary() {
            let max = 0;

            for (const currentWorker of this.workers) {
               
               if (currentWorker.salary > max) {
                  max = currentWorker.salary;
               }
            }

            return max;
         }
      }

      class Worker {
         constructor(name, salary) {
            this.name = name;
            this.salary = salary;
         }
      }

      let text = document.querySelector("#inputs textarea").value.split(",");
      let jsnArray = JSON.parse(text);
      let allRestaurants = [];

      for (const restaurantInfo of jsnArray) {
         let restaurantWithWorkers = restaurantInfo.split(" - ");
         let restaurantName = restaurantWithWorkers[0];
         let workersWithSalaries = restaurantWithWorkers[1].split(", ");

         let restaurant = allRestaurants.find(r => r.name === restaurantName);
         let isNew = false;

         if (!restaurant) {
            restaurant = new Restaurant(restaurantName);
            isNew = true;
         }
         
         for (const currentWorker of workersWithSalaries) {
            let workerSalaryArray = currentWorker.split(" ");

            let workerName = workerSalaryArray[0];
            let workerSalary = Number(workerSalaryArray[1]);

            let worker = new Worker(workerName, workerSalary)
            restaurant.workers.push(worker);
         }

         if (isNew) {
            allRestaurants.push(restaurant);
         }
      }

      if (allRestaurants.length > 0) {
         let restaurant = allRestaurants[0];
         
         for (const currentRestaurant of allRestaurants) {
            if (currentRestaurant.averageSalary() > restaurant.averageSalary()) {
               restaurant = currentRestaurant;
            }
         }

         document.querySelector("#bestRestaurant p").textContent = `Name: ${restaurant.name} Average Salary: ${restaurant.averageSalary().toFixed(2)} Best Salary: ${restaurant.maxSalary().toFixed(2)}`;

         let outputString = "";

         for (const worker of restaurant.workers.sort((a, b) => b.salary - a.salary)) {
            let currentOutputString = `Name: ${worker.name} With Salary: ${worker.salary} `;
            outputString += currentOutputString;
         }

         document.querySelector("#workers p").textContent = outputString.trim();
      }
   }
}