import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories_active: false,
        tag_active: false,
        activeIndex: 1,
        projectCards: [],
        categories: [],
        articles: [],
    },
    mutations: {
        SET_CARDS(state, cards) {
            state.projectCards = cards
        },
        SET_CATEGORIES(state, el) {
            state.categories = el
        },
        SET_ARTICLES(state, art) {
            state.articles = art
        },
        ON_CLICK(state, index) {
            if (state.activeIndex === index) {
                state.activeIndex = 1;
            } else {
                state.activeIndex = index;
            }
        },
        SET_STAR(state, id) {
            for (let object of state.projectCards) {
                if (object.id === id) {
                    object.isLiked = !object.isLiked;
                }
            }
            // state.projectCards = data
        }
    },
    getters: {
        getProjectCards(state) {
            return state.projectCards
        },
        getCategories(state) {
            return state.categories
        },
        getArticles(state) {
            return state.articles
        },
        getProjectCardById: (state) => (id) => {
            if (id) {
                const data = Array.from(state.projectCards).find(
                    (elem) => +id === elem.id
                );
                return data;
            } else {
                return null;
            }
        },
        getArticlesPages: (state) => (perPage) => {
            if (perPage) {
                return Math.ceil(Array.from(state.articles).length / perPage);
            } else {
                return 1;
            }
        },
        getLastPost: (state) => {
            return Array.from(state.articles).slice(-1)[0];
        },
        getArticleById: (state) => (id) => {
            if (id) {
                const data = Array.from(state.articles).find(
                    (elem) => +id === elem.id
                );
                return data;
            } else {
                return null;
            }
        },
    },
    actions: {
        setProjectCards({ commit }) {
            setTimeout(() => {
                const projectCards = [
                    {
                        id: 1,
                        isLiked: true,
                        img: ['kitchan_project_1.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchen',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'kitchan_project_2',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 2,
                        isLiked: false,
                        img: ['kitchan_project_2.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>`,
                        alt: 'kitchan_project_2',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 3,
                        isLiked: false,
                        img: ['kitchan_project_3.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'kitchan_project_3',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 4,
                        isLiked: false,
                        img: ['kitchan_project_4.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>`,
                        alt: 'kitchan_project_4',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 5,
                        isLiked: false,
                        img: ['kitchan_project_5.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'kitchan_project_5',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 6,
                        isLiked: false,
                        img: ['kitchan_project_6.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>`,
                        alt: 'kitchan_project_63',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 7,
                        isLiked: false,
                        img: ['kitchan_project_7.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'kitchan_project_7',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 8,
                        isLiked: false,
                        img: ['kitchan_project_8.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>`,
                        alt: 'kitchan_project_8',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 9,
                        isLiked: false,
                        img: ['bedroom-project_1.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_1',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 10,
                        isLiked: false,
                        img: ['bedroom-project_2.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_2',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 11,
                        isLiked: false,
                        img: ['bedroom-project_3.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_3',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 12,
                        isLiked: false,
                        img: ['bedroom-project_4.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_4',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 13,
                        isLiked: false,
                        img: ['bedroom-project_5.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_5',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 14,
                        isLiked: false,
                        img: ['bedroom-project_6.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_6',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 15,
                        isLiked: false,
                        img: ['bedroom-project_7.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_7',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 16,
                        isLiked: false,
                        img: ['bedroom-project_8.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bedroom-project_8',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 17,
                        isLiked: false,
                        img: ['living_area_1.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_1',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 18,
                        isLiked: false,
                        img: ['living_area_2.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_2',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 19,
                        isLiked: false,
                        img: ['living_area_3.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_3',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 20,
                        isLiked: false,
                        img: ['living_area_4.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_4',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 21,
                        isLiked: false,
                        img: ['living_area_5.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_5',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 22,
                        isLiked: false,
                        img: ['living_area_6.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bliving_area_6',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 23,
                        isLiked: false,
                        img: ['living_area_7.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_7',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 24,
                        isLiked: false,
                        img: ['living_area_8.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Living Area',
                        title: 'living area',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'living_area_8',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 25,
                        isLiked: false,
                        img: ['bathroom-project_1.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_1',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 26,
                        isLiked: false,
                        img: ['bathroom-project_2.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_2',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 27,
                        isLiked: false,
                        img: ['bathroom-project_3.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_3',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 28,
                        isLiked: false,
                        img: ['bathroom-project_4.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_4',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 29,
                        isLiked: false,
                        img: ['bathroom-project_5.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_5',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 30,
                        isLiked: false,
                        img: ['bathroom-project_6.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_6',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 31,
                        isLiked: false,
                        img: ['bathroom-project_7.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_7',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                    {
                        id: 32,
                        isLiked: false,
                        img: ['bathroom-project_8.jpg', 'project_img_2.jpg', 'project_img_3.jpg'],
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
                        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p> 
                        <p>In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.</p>`,
                        alt: 'bathroom-project_8',
                        class: 'project__card-img',
                        nav: [
                            {
                                title: 'Decor',
                                path: '#'
                            },
                            {
                                title: 'Artchitecture',
                                path: '#'
                            },
                        ]
                    },
                ]
                commit('SET_CARDS', projectCards)
            }, 0);
        },
        setCategories({ commit }) {
            setTimeout(() => {
                const categories = ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area']
                commit('SET_CATEGORIES', categories)
            }, 0);
        },
        setArticles({ commit }) {
            setTimeout(() => {
                const articles = [
                    {
                        id: 1,
                        category: 'Kitchen Design',
                        tag: 'Kitchen',
                        title: 'Let’s Get Solution For Building Construction Work',
                        date: '26 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/blog_1.jpg`)}" alt="image 1">
                        <p class=}" alt="image 1"><div class="blog-articles__date"><p>26 December,2022</p></div><p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                                turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                                which don't look even slightly believable.</p><p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                the Internet tend to repeat predefined chunks as necessary.</p><div class="quotes">
                                <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                                <p class="quotes__text">The details are not the details. They make the design.</p>
                            </div>`,
                        imageUrl: 'blog_1.jpg',
                        alt: 'image 1'
                    },
                    {
                        id: 2,
                        category: 'Living Design',
                        tag: 'Living',
                        title: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2022',
                        text: `<p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered.</p>
                            <ol class="blog-articles__ol">
                                <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                    Lorem Ipsum available, but the majority have suffered.</li>
                                <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                    Lorem Ipsum available, but the majority have suffered.</li>
                                <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                    Lorem Ipsum available, but the majority have suffered.</li>
                            </ol>
                            <img class="blog-articles__img-2" src="${require(`@/assets/img/blog_2.jpg`)}" alt="image 2">
                            <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered.</p>`,
                        imageUrl: 'blog_2.jpg',
                        alt: 'image 2'
                    },
                    {
                        id: 3,
                        category: 'Interior Design',
                        tag: 'Interior',
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/blog_3.jpg`)}" alt="image 3">
                            <div class="blog-articles__date">
                                <p>25 December,2022</p>
                                <nav class="blog-articles__nav">
                                  <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                                  <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                                  <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                                </nav>
                            </div>
                            <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                                turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                                which don't look even slightly believable.</p>
                            <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                the Internet tend to repeat predefined chunks as necessary.</p>
                            <div class="quotes">
                            <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                                <p class="quotes__text">The details are not the details. They make the design.</p>
                            </div>`,
                        imageUrl: 'blog_3.jpg',
                        alt: 'image 3'
                    },
                    {
                        id: 4,
                        category: 'Kitchen Design',
                        tag: 'Kitchen',
                        title: 'Let’s Get Solution For Building Construction Work',
                        date: '26 December,2022',
                        text: `<p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>
                        <ol class="blog-articles__ol">
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                        </ol>
                        <img class="blog-articles__img-2" src="${require(`@/assets/img/blog_4.jpg`)}" alt="image 4">
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>`,
                        imageUrl: 'blog_4.jpg',
                        alt: 'image 4'
                    },
                    {
                        id: 5,
                        category: 'Living Design',
                        tag: 'Living',
                        title: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/blog_5.jpg`)}" alt="image 5">
                        <div class="blog-articles__date">
                            <p>22 December,2022</p>
                            <nav class="blog-articles__nav">
                              <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                              <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                              <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                            </nav>
                        </div>
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                            which don't look even slightly believable.</p>
                        <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary.</p>
                        <div class="quotes">
                        <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                            <p class="quotes__text">The details are not the details. They make the design.</p>
                        </div>`,
                        imageUrl: 'blog_5.jpg',
                        alt: 'image 5'
                    },
                    {
                        id: 6,
                        category: 'Interior Design',
                        tag: 'Interior',
                        title: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2022',
                        text: `<p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>
                        <ol class="blog-articles__ol">
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                        </ol>
                        <img class="blog-articles__img-2" src="${require(`@/assets/img/blog_6.jpg`)}" alt="image 6">
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>`,
                        imageUrl: 'blog_6.jpg',
                        alt: 'image 6'
                    },
                    {
                        id: 7,
                        category: 'Kitchen Design',
                        tag: 'Kitchen',
                        title: 'Let’s Get Solution for Building Construction Work',
                        date: '26 December,2022',
                        text: `<p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>
                        <ol class="blog-articles__ol">
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                        </ol>
                        <img class="blog-articles__img-2" src="${require(`@/assets/img/article_1.png`)}" alt="image 7">
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>`,
                        imageUrl: 'article_1.png',
                        alt: 'image 7'
                    },
                    {
                        id: 8,
                        category: 'Bedroom Design',
                        tag: 'Bedroom',
                        title: 'Low Cost Latest Invented Bedroom Designing Ideas.',
                        date: '27 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/bedroom_1.jpg`)}" alt="image 8">
                        <div class="blog-articles__date">
                            <p>25 December,2022</p>
                            <nav class="blog-articles__nav">
                              <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                              <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                              <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                            </nav>
                        </div>
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                            which don't look even slightly believable.</p>
                        <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary.</p>
                        <div class="quotes">
                        <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                            <p class="quotes__text">The details are not the details. They make the design.</p>
                        </div>`,
                        imageUrl: 'bedroom_1.jpg',
                        alt: 'image 8'
                    },
                    {
                        id: 9,
                        category: 'Building Design',
                        tag: 'Building',
                        title: 'Let’s Get Solution for Building Construction Work',
                        date: '26 December,2022',
                        text: `<p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>
                        <ol class="blog-articles__ol">
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                            <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered.</li>
                        </ol>
                        <img class="blog-articles__img-2" src="${require(`@/assets/img/building_1.jpg`)}" alt="image 9">
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.</p>`,
                        imageUrl: 'building_1.jpg',
                        alt: 'image 9'
                    },
                    {
                        id: 10,
                        category: 'Architecture Design',
                        tag: 'Architecture',
                        title: 'Low Cost Latest Invented Interior Designing Ideas',
                        date: '27 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/architecture_1.jpg`)}" alt="image 10">
                        <div class="blog-articles__date">
                            <p>27 December,2022</p>
                            <nav class="blog-articles__nav">
                              <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                              <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                              <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                            </nav>
                        </div>
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                            which don't look even slightly believable.</p>
                        <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary.</p>
                        <div class="quotes">
                        <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                            <p class="quotes__text">The details are not the details. They make the design.</p>
                        </div>`,
                        imageUrl: 'architecture_1.jpg',
                        alt: 'image 10'
                    },
                    {
                        id: 11,
                        category: 'Bathroom Design',
                        tag: 'Bathroom',
                        title: 'Low Cost Latest Invented Interior Designing Ideas',
                        date: '27 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/bathroom-project_5.jpg`)}" alt="image 11">
                        <div class="blog-articles__date">
                            <p>27 December,2022</p>
                            <nav class="blog-articles__nav">
                              <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                              <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                              <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                            </nav>
                        </div>
                        <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
                            which don't look even slightly believable.</p>
                        <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as necessary.</p>
                        <div class="quotes">
                        <img src="${require(`@/assets/img/quotes.svg`)}" alt="quotes" class="quotes__img">
                            <p class="quotes__text">The details are not the details. They make the design.</p>
                        </div>`,
                        imageUrl: 'bathroom-project_5.jpg',
                        alt: 'image 11'
                    },
                    {
                        id: 12,
                        category: 'Kitchen Design',
                        tag: 'Kitchen',
                        title: 'Low Cost Latest Invented Interior Designing Ideas',
                        date: '27 December,2022',
                        text: `<img class="blog-articles__img-1" src="${require(`@/assets/img/post_1.jpg`)}" alt="image 12">
                        <div class="blog-articles__date">
                            <p>27 December,2022</p>
                            <nav class="blog-articles__nav">
                              <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
                              <a href="/" class="blog-articles__link breadcrumbs">Home</a>
                              <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
                            </nav>
                        </div>
                        <div class="blog-articles__text">
                            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p><p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        </div>`,
                        imageUrl: 'post_1.jpg',
                        alt: 'image 12'
                    },
                ]
                commit('SET_ARTICLES', articles)
            }, 0);
        },
        // setStar({ commit }, payload) {

        //     commit('SET_STAR', payload)
        // }

    }
})