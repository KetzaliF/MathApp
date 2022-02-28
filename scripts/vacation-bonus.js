// VACATIONS TABLE

const yearsOfService = [
   {
      vacationsDays: 0,
   },
   {
      yearService: '1',
      vacationsDays: 6,
   },
   {
      yearService: '2',
      vacationsDays: 8,
   },
   {
      yearService: '3',
      vacationsDays: 10,
   },
   {
      yearService: '4',
      vacationsDays: 12,
   },
   {
      yearService: '5 to 9',
      vacationsDays: 14,
   },
   {
      yearService: '10 to 14',
      vacationsDays: 16,
   },
   {
      yearService: '15 to 19',
      vacationsDays: 18,
   },
   {
      yearService: '20 to 24',
      vacationsDays: 20,
   },
   {
      yearService: '25 to 29',
      vacationsDays: 22,
   },
];

// FORMULA TO OBTAIN THE VACATIONS BONUS
const calculateVacationsBonus = (dailySalary, vacationsDays) => {
   const vacationsBonus = (dailySalary * vacationsDays * 0.25).toFixed(2);
   return vacationsBonus;
}

const vacationsBonusFunction = () => {
   const monthlySalary = document.getElementById('inputSalary').value;
   const dailySalary = monthlySalary / 30;

   const yearsService = document.getElementById('inputYearsService').value;
   
   const vacationsDays = yearsOfService[yearsService].vacationsDays;

   const vacationBonus = calculateVacationsBonus(dailySalary, vacationsDays);
   
   document.getElementById("vacationsBonus").value = vacationBonus;
   document.getElementById("vacationsDays").value = vacationsDays;
}