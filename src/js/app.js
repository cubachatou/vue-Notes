import { createApp } from "vue";
import example from "./components/example.vue";

createApp({
	data() {
		return {};
	},
	methods: {},
	components: {
		example,
	},
}).mount("#app");

window["FLS"] = false;

// Connecting the main style file
import "../scss/style.scss";

//===================== Functional =====================//
import * as flsFunctions from "./base/functions.js";

// flsFunctions.isWebp();
// flsFunctions.addTouchClass();
// flsFunctions.addLoadedClass();
// flsFunctions.menuInit();
// flsFunctions.setAnimateDelay(0.07);
// flsFunctions.fullVHfix();

// Documentation: https://template.fls.guru/template-docs/modul-spojlery.html
// Snippet (HTML): spollers
// flsFunctions.spollers();

// Documentation: https://template.fls.guru/template-docs/modul-taby.html
// Snippet (HTML): tabs
// flsFunctions.tabs();

// Documentation: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
// Snippet (HTML): showmore
// flsFunctions.showMore();

// Documentation: https://template.fls.guru/template-docs/modul-ripple-effect.html
// Snippet (HTML):
// flsFunctions.rippleEffect();

// Documentation: https://template.fls.guru/template-docs
// Snippet (HTML):
// flsFunctions.customCursor(true);

// Documentation: https://template.fls.guru/template-docs/funkcional-popup.html
// Snippet (HTML): pl, pop
// import './libs/popup.js'

// Documentation: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
// import './libs/parallax-mouse.js'

//===================== FORMS =====================//
import * as flsForms from "./base/forms/forms.js";

// Documentation: https://template.fls.guru/template-docs/rabota-s-formami.html
// flsForms.formFieldsInit({
// 	viewPass: false,
// 	autoHeight: false,
// });

// flsForms.formSubmit();
// flsForms.formQuantity();
// flsForms.formRating();

// import "./libs/select.js";
// import "./base/forms/datepicker.js";

// Plugin documentation: https://github.com/RobinHerbots/inputmask
// import "./base/forms/inputmask.js";

// Plugin documentation: https://refreshless.com/nouislider/
// Snippet (HTML): range
// import "./base/forms/range.js";

// Plugin documentation: https://atomiks.github.io/tippyjs/
// Snippet (HTML): tip (додає атрибут з підказкою для html тега)
// import "./base/tippy.js";

//===================== SLIDERS  =====================//

// Plugin documentation: https://swiperjs.com/
// Snippet(HTML): swiper
import "./base/sliders.js";

//===================== SCROLLING =====================//

//--- SIMPLEBAR ---//
// Plugin documentation: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
// import './files/scroll/simplebar.js';

//--- LAZYLOAD ---//
// Working documentation in the template: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Plugin documentation: https://github.com/verlok/vanilla-lazyload
// import './files/scroll/lazyload.js';

//--- WATCHER ---//
// Documentation: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// import './libs/watcher.js'

//--- FULLPAGE ---//
// Documentation: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// import './libs/fullpage.js'

//--- PARALLAX ---//
// Documentation: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import "./libs/parallax.js";

import * as flsScroll from "./base/scroll/scroll.js";

// Documentation: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Documentation: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// flsScroll.stickyBlock();

// Documentation: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// flsScroll.digitsCounter();

// import './base/scroll/simplebar.js';

//===================== GALLERY =====================//
// Plugin documentation: https://www.lightgalleryjs.com/docs/
// import "./base/gallery.js";

//===================== OTHERS =====================//
// Documentation: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

// import './libs/wNumb.min.js';

//===================== MY-CODE =====================//
import "./base/script.js";
