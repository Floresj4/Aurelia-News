export class Welcome {
	heading = 'Welcome to Aurelia!';
	firstName = 'Jason';
	lastName = 'Flores';

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	submit() {
		alert(`Welcome, ${this.fullName}!`);
	}
}
