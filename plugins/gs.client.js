import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ isDev }) => {
	if (!isDev){
		Vue.use(VueGtag, {
			config: { id: 'G-PK9DZK2CD2' }
		});
	} else {
		console.log("Skipping GA in development")
	}
}