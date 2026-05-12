let employees = JSON.parse(localStorage.getItem('employees')) || [];

const form = document.getElementById('employeeForm');
const table = document.getElementById('employeeTable');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const employee = {
    name: document.getElementById('name').value,
    id: document.getElementById('empId').value
  };

  employees.push(employee);

  localStorage.setItem('employees', JSON.stringify(employees));

  renderEmployees();

  form.reset();
});

function renderEmployees(){

  table.innerHTML = '';

  employees.forEach((emp)=>{

    table.innerHTML += `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.id}</td>
      </tr>
    `;
  });
}

const ctx = document.getElementById('salaryChart');

const chart = new Chart(ctx,{
  type:'bar',

  data:{
    labels:['HR','IT','Finance'],
    datasets:[{
      label:'Employees',
      data:[5,8,3]
    }]
  }
});

renderEmployees();
