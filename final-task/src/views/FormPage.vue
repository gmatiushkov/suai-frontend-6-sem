<template>
    <div class="form-page">
        <h1>Обратная связь</h1>
        <p>Оставьте свои предложения или вопросы.</p>
        <form @submit.prevent="submitForm" class="feedback-form">
            <div class="mb-3">
                <label for="name" class="form-label">Имя *</label>
                <input type="text"
                       class="form-control"
                       id="name"
                       v-model.trim="formData.name"
                       required
                       placeholder="Введите ваше имя" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email *</label>
                <input type="email"
                       class="form-control"
                       id="email"
                       v-model.trim="formData.email"
                       required
                       placeholder="Введите ваш email" />
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Сообщение *</label>
                <textarea class="form-control"
                          id="message"
                          v-model.trim="formData.message"
                          required
                          placeholder="Ваше сообщение"
                          rows="4"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Отправить</button>
        </form>

        <div v-if="showModal" class="modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <p>{{ modalMessage }}</p>
                <button class="btn btn-secondary" @click="closeModal">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormPage',
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    message: ''
                },
                showModal: false,
                modalMessage: ''
            };
        },
        methods: {
            submitForm() {
                const nameRegex = /^[a-zA-Zа-яА-Я\s-]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!this.formData.name || !nameRegex.test(this.formData.name)) {
                    this.showModal = true;
                    this.modalMessage = 'Пожалуйста, введите корректное имя (только буквы, пробелы или дефисы).';
                } else if (!this.formData.email || !emailRegex.test(this.formData.email)) {
                    this.showModal = true;
                    this.modalMessage = 'Пожалуйста, введите корректный email.';
                } else if (!this.formData.message) {
                    this.showModal = true;
                    this.modalMessage = 'Пожалуйста, введите сообщение.';
                } else {
                    this.showModal = true;
                    this.modalMessage = 'Сообщение успешно отправлено!';
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                }
            },
            closeModal() {
                this.showModal = false;
                this.modalMessage = '';
            }
        }
    };
</script>

<style lang="scss" scoped>
    .form-page {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
    }

    .feedback-form {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
    }

    .form-label {
        font-weight: bold;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        max-width: 400px;
        width: 90%;
    }

    .btn-primary {
        background-color: #007bff;
        border: none;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-secondary {
        background-color: #6c757d;
        border: none;
    }

    .btn-secondary:hover {
        background-color: #5a6268;
    }

    // Адаптивность
    @media (max-width: 1200px) {
        .form-page {
            max-width: 500px;
        }

        .modal-content {
            max-width: 350px;
        }
    }

    @media (max-width: 800px) {
        .form-page {
            max-width: 400px;
        }

        .feedback-form {
            padding: 15px;
        }

        .modal-content {
            max-width: 300px;
            padding: 15px;
        }
    }

    @media (max-width: 550px) {
        .form-page {
            max-width: 100%;
            padding: 10px;
        }

        .feedback-form {
            padding: 10px;
        }

        h1 {
            font-size: 24px; // Уменьшаем заголовок
        }

        .form-label {
            font-size: 14px;
        }

        .btn-primary {
            width: 100%; // Кнопка на всю ширину
        }

        .modal-content {
            max-width: 90%;
            padding: 10px;
        }
    }
</style>