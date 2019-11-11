import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
	selector: 'app-player-search-box',
	templateUrl: './player-search-box.component.html',
	styleUrls: ['./player-search-box.component.css']
})
export class PlayerSearchBoxComponent implements OnInit {
	@Output() sendNameEvent = new EventEmitter<string>(true);
	name: string;
	constructor() { }

	ngOnInit() {
	}

	setName(value: string) {this.name = value}
	sendName() {this.sendNameEvent.emit(this.name)}

}
