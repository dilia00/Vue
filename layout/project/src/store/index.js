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

    },
    actions: {
        setProjectCards({ commit }) {
            setTimeout(() => {
                const projectCards = [
                    {
                        id: 1,
                        img: 'kitchan_project_1.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchen',
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
                        img: 'kitchan_project_2.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_3.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_4.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_5.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_6.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_7.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'kitchan_project_8.jpg',
                        category: 'Kitchen',
                        title: 'Modern Kitchan',
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
                        img: 'bedroom-project_1.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_2.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_3.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_4.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_5.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_6.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_7.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'bedroom-project_8.jpg',
                        category: 'Bedroom',
                        title: 'Minimal Bedroom',
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
                        img: 'living_area_1.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_2.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_3.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_4.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_5.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_6.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_7.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'living_area_8.jpg',
                        category: 'Living Area',
                        title: 'living area',
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
                        img: 'bathroom-project_1.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_2.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_3.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_4.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_5.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_6.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_7.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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
                        img: 'bathroom-project_8.jpg',
                        category: 'Bathroom',
                        title: 'Minimal Bathroom',
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