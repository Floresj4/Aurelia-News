export class App {
	configureRouter(config, router) {
		config.title = 'Aurelia';
		config.map([
			{ route: ['', 'welcome'], 	name: 'welcome',  		moduleId: './welcome/welcome',  		nav: true,	title: 'Welcome' },
			{ route: 'users', 			name: 'users',    		moduleId: './users/users',      		nav: true,	title: 'Users' },
            { route: 'hacker-news',		name: 'hacker-news',   	moduleId: './hacker-news/hacker-news',	nav: true,	title: 'Hacker News' }
		]);

		this.router = router;
	}
}
