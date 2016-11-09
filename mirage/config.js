export default function() {

  this.namespace = '/api';

  let employees = [
		{
		  id: '1',
		  type: "employee",
		  attributes: {
			  firstName: 'Tom',
			  surname: 'Roberts',
			  dateOfBirth: '21/04/1986',
			  incomeTax: '13316.20',
			  nationalInsurance: '4466.96'
			}
		}, {
      id: '2',
	  type: "employee",
	  attributes: {
		  firstName: 'Louis',
		  surname: 'Singh',
		  dateOfBirth: '16/04/1979',
		  incomeTax: '9698.60 ',
		  nationalInsurance: '4286.08'
	  }
    }, {
      id: '3',
	  type: "employee",
	  attributes: {
		  firstName: 'Mohammed',
		  surname: 'John',
		  dateOfBirth: '18/05/1992',
		  incomeTax: '3157.80',
		  nationalInsurance: '2199.48'
	  }
    }, {
	  id: '4',
	  type: "employee",
	  attributes: {
		  firstName: 'Owen',
		  surname: 'Humphreys',
		  dateOfBirth: '15/05/1972',
		  incomeTax: '4147.20',
		  nationalInsurance: '2793.12'
	  }
	}];

  this.get('/employees', function(db, request) {
    if(request.queryParams.name) {
      let filteredEmployees = employees.filter(function(el) {
		let name = (el.attributes.firstName + " " + el.attributes.surname).toLowerCase();
		return name.indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredEmployees };
    } else {
      return { data: employees };
    }
  });
}