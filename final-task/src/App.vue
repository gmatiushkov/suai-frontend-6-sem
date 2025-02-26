<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Умный город</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/tech">Технические возможности</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/issues">Проблемы реализации</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/form">Обратная связь</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-5 pt-5">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    body {
        background-color: #f8f9fa;
    }

    .navbar {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .container {
        padding: 0 15px;
    }

    @media (max-width: 1200px) {
        .container {
            max-width: 960px;
        }

        .navbar-nav {
            font-size: 16px;
        }
    }

    @media (max-width: 800px) {
        .container {
            max-width: 720px;
        }

        .navbar-brand {
            font-size: 18px;
        }

        .navbar-nav {
            padding: 10px 0;
        }
    }

    @media (max-width: 550px) {
        .container {
            max-width: 100%;
            padding: 0 10px;
        }

        .navbar-brand {
            font-size: 16px;
        }

        .navbar-toggler {
            padding: 5px;
        }
    }
</style>