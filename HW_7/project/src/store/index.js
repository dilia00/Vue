import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories_active: false,
        activeIndex: 1,
        projectCards: [],
        categories: [],
    },
    mutations: {
        SET_CARDS(state, cards) {
            state.projectCards = cards
        },
        SET_CATEGORIES(state, el) {
            state.categories = el
        },
        ON_CLICK(state, index) {
            if (state.activeIndex === index) {
                state.activeIndex = 1;
            } else {
                state.activeIndex = index;
            }
        },
    },
    getters: {
        getProjectCards(state) {
            return state.projectCards
        },
        getCategories(state) {
            return state.categories
        },
        getProjectCardById: (state) => (id) => {
            if (id) {
                const data = state.projectCards.find(
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
                        isLiked: false,
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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
                                href: '#'
                            },
                            {
                                title: 'Artchitecture',
                                href: '#'
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

    }
})