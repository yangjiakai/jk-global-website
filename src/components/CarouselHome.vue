<template>
    <div>
        <ul class="slideshow">
            <li>
                <h3>Recycle</h3>
                <span>Summer</span>
            </li>
            <li>
                <span>Fall</span>
            </li>

            <li>
                <span>Winter</span>
            </li>
            <li>
                <span>Spring</span>
            </li>
            <li>
                <span>5</span>
            </li>
            <li>
                <span>6</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        src: require('../assets/images/環球/会社写真1.jpg'),
                    },
                    {
                        src: require('../assets/images/環球/会社写真2.jpg'),
                    },
                    {
                        src: require('../assets/images/環球/会社写真3.jpg'),
                    },
                    {
                        src: require('../assets/images/環球/会社写真4.jpg'),
                    },
                    {
                        src: require('../assets/images/環球/会社写真5.jpg'),
                    },
                    {
                        src: require('../assets/images/環球/会社写真6.jpg'),
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .slideshow {
        list-style: none;
        z-index: 1;
    }

    .slideshow li span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: none;
        opacity: 0;
        z-index: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-animation: imageAnimation 24s linear infinite 0s;
        -moz-animation: imageAnimation 24s linear infinite 0s;
        animation: imageAnimation 24s linear infinite 0s;
    }

    .slideshow li h3 {
        position: absolute;
        text-align: center;
        z-index: 2;
        bottom: 150px;
        left: 0;
        right: 0;
        opacity: 0;
        font-size: 4.0625em;
        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        color: #fff;
        -webkit-animation: titleAnimation 24s linear 1 0s;
        -moz-animation: titleAnimation 24s linear 1 0s;
        animation: titleAnimation 24s linear 1 0s;
    }

    @media only screen and (min-width: 768px) {
        .slideshow li h3 {
            bottom: 30px;
            font-size: 8.125em;
        }
    }

    @media only screen and (min-width: 1024px) {
        .slideshow li h3 {
            font-size: 10.9375em;
        }
    }

    .slideshow li:nth-child(1) span {
        background-image: url('../assets/images/環球/会社写真1.jpg');
    }

    .slideshow li:nth-child(2) span {
        background-image: url('../assets/images/環球/会社写真2.jpg');
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        animation-delay: 6s;
    }

    .slideshow li:nth-child(3) span {
        background-image: url('../assets/images/環球/会社写真3.jpg');
        -webkit-animation-delay: 12s;
        -moz-animation-delay: 12s;
        animation-delay: 12s;
    }

    .slideshow li:nth-child(4) span {
        background-image: url('../assets/images/環球/会社写真4.jpg');
        -webkit-animation-delay: 18s;
        -moz-animation-delay: 18s;
        animation-delay: 18s;
    }

        .slideshow li:nth-child(5) span {
        background-image: url('../assets/images/環球/会社写真5.jpg');
        -webkit-animation-delay: 24s;
        -moz-animation-delay: 24s;
        animation-delay: 24s;
    }

    .slideshow li:nth-child(6) span {
        background-image: url('../assets/images/環球/会社写真6.jpg');
        -webkit-animation-delay: 28s;
        -moz-animation-delay: 28s;
        animation-delay: 28s;
    }



    @-webkit-keyframes imageAnimation {
        0% {
            opacity: 0;
            -webkit-animation-timing-function: ease-in;
        }

        12.5% {
            opacity: 1;
            -webkit-animation-timing-function: ease-out;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @-moz-keyframes imageAnimation {
        0% {
            opacity: 0;
            -moz-animation-timing-function: ease-in;
        }

        12.5% {
            opacity: 1;
            -moz-animation-timing-function: ease-out;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes imageAnimation {
        0% {
            opacity: 0;
            -webkit-animation-timing-function: ease-in;
            -moz-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }

        12.5% {
            opacity: 1;
            -webkit-animation-timing-function: ease-out;
            -moz-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @-webkit-keyframes titleAnimation {
        0% {
            opacity: 0;
        }

        12.5% {
            opacity: 1;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @-moz-keyframes titleAnimation {
        0% {
            opacity: 0;
        }

        12.5% {
            opacity: 1;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    @keyframes titleAnimation {
        0% {
            opacity: 0;
        }

        12.5% {
            opacity: 1;
        }

        25% {
            opacity: 1;
        }

        37.5% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }

    .no-cssanimations .slideshow li span {
        opacity: 1;
    }
</style>