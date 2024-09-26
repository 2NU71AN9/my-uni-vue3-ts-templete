import 'reflect-metadata';
import { createSSRApp } from 'vue';
import App from './App.vue';
import pinia from '@/store';
import tmui from './tmui';

declare let uni: any;

export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia);
	app.use(tmui, {} as Tmui.tmuiConfig);
	uni.$zp = {
		config: {
			'refresher-img-style': {
				width: '20px',
				height: '20px',
			},
			'refresher-title-style': {
				fontSize: '15px',
			},
			'loading-more-title-custom-style': {
				fontSize: '15px',
			},
			'loading-more-loading-icon-custom-style': {
				width: '20px',
				height: '20px',
			},
			'empty-view-text': '没有找到数据哦~~',
			'empty-view-title-style': {
				fontSize: '15px',
			},
		},
	};
	return {
		app,
	};
}
