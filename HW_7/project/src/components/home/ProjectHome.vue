<template>
    <section class="project center">
        <div class="project__heading">
            <h2 class="project__title">Follow Our Projects</h2>
            <p class="project__text">It is a long established fact that a reader will be distracted by the of
                readable content of page lookings at its layouts points.
            </p>
        </div>
        <div class="project__cards">
            <ProjectCard v-for="card in projectCards" 
                :key="card.id" 
                :card="card"/>

        </div>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectHome',
  components: {
    ProjectCard
  },
  data() {
    return {
        projectCards:[
            {
                id: 1,
                img: 'kitchan_project_1.jpg',
                title: 'Modern Kitchan',
                alt: 'kitchan_project_1',
                class: 'project__card-img_1',
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
                title: 'Modern Kitchan',
                alt: 'kitchan_project_2',
                class: 'project__card-img_2',
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
                title: 'Modern Kitchan',
                alt: 'kitchan_project_3',
                class: 'project__card-img_3',
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
                title: 'Modern Kitchan',
                alt: 'kitchan_project_4',
                class: 'project__card-img_4',
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
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
.project {
    margin-top: 96px;
}

.project__heading {
    text-align: center;
}

.project__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
}

.project__text {
    margin: 8px auto 93px;
    width: 737px;
    align-items: center;
}

.project__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 56px;
}

</style>