<template>
    <section class="counter">
        <div class="counter__box">
            <div class="counter__item">
                <h1 class="counter__item-title">12</h1>
                <p class="counter__item-text">Years Of Experiance</p>
            </div>
            <svg class="counter__line" width="1" height="130" viewBox="0 0 1 130" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counter__item">
                <h1 class="counter__item-title">85</h1>
                <p class="counter__item-text">Success Project</p>
            </div>
            <svg class="counter__line" width="1" height="130" viewBox="0 0 1 130" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counter__item">
                <h1 class="counter__item-title">15</h1>
                <p class="counter__item-text">Active Project</p>
            </div>
            <svg class="counter__line" width="1" height="130" viewBox="0 0 1 130" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counter__item">
                <h1 class="counter__item-title">95</h1>
                <p class="counter__item-text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'CounterComp',
};
</script>

<style scoped>
.counter {
    background: rgb(244, 240, 236);
    margin-top: 96px;
}

.counter__box {
    display: flex;
    justify-content: space-between;
    padding-left: calc(50% - 540px);
    padding-right: calc(50% - 540px);
}

.counter__line {
    margin-top: 169px;
}

.counter__item {
    margin-top: 151px;
    margin-bottom: 151px;
    text-align: center;
    width: 270px;
}

.counter__item-title {
    color: rgb(205, 162, 116);
    font-family: "DM Serif Display", serif;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 16px;
    letter-spacing: 1px;
}
</style>