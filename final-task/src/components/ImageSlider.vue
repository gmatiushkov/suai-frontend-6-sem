<template>
    <div class="slider">
        <div class="slider-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in images" :key="index" class="slide">
                <img :src="image" alt="Smart City Tech" class="img-fluid" />
            </div>
        </div>
        <button class="btn btn-primary prev" @click="prevSlide">&lt;</button>
        <button class="btn btn-primary next" @click="nextSlide">&gt;</button>
    </div>
</template>

<script>
    export default {
        name: 'ImageSlider',
        data() {
            return {
                images: [
                    require('../assets/smart-city-iot.jpg'),
                    require('../assets/big-data.jpg'),
                    require('../assets/ai.jpeg')
                ],
                currentIndex: 0
            };
        },
        methods: {
            prevSlide() {
                this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            },
            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .slider {
        position: relative;
        max-width: 800px;
        margin: 20px auto;
        overflow: hidden;
    }

    .slider-wrapper {
        display: flex;
    }

    .slide {
        flex: 0 0 100%;
        min-width: 0;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .prev,
    .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px 15px;
        font-size: 18px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .prev:hover,
    .next:hover {
        background-color: #0056b3;
    }

    // Адаптивность
    @media (max-width: 1200px) {
        .slider {
            max-width: 600px;
        }
    }

    @media (max-width: 800px) {
        .slider {
            max-width: 450px;
        }

        .prev,
        .next {
            padding: 8px 12px;
            font-size: 16px; // Уменьшаем кнопки
        }
    }

    @media (max-width: 550px) {
        .slider {
            max-width: 100%;
            margin: 10px 0;
        }

        .prev,
        .next {
            padding: 5px 10px;
            font-size: 14px;
        }
    }
</style>