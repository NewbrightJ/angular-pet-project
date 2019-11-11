import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-project';
	name1: string;
	name2: string;

	testEventMethod(currElement: string, inName: string) {
		console.log('');
		if(currElement === 'name1') {
			this.name1 = inName;
		} else {
			this.name2 = inName;
		}
		console.log('testEventMethod');
	}
}
