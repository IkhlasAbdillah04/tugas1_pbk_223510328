<template>
  <div class="contact-form">
    <h2>CONTACT ME</h2>
    <p>
      If you are interested in collaborating or have any questions, please contact me through one of
      the methods below:
    </p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('URL_BACKEND', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })

        if (response.ok) {
          console.log('Form data successfully submitted')
          this.formData = {
            name: '',
            email: '',
            message: ''
          }
        } else {
          console.error('Error submitting form data:', response.statusText)
        }
      } catch (error) {
        console.error('Error submitting form data:', error)
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form h2 {
  color: #032063;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 30px;
}

.contact-form p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
}

.form-group {
  margin-bottom: 0.5rem;
}

label {
  display: block;
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.5rem;
}

input[type='text'],
input[type='email'],
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

input[type='text']:focus,
input[type='email']:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #0a2c50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

@media screen and (max-width: 768px) {
  .form-group {
    margin-bottom: 1rem;
  }

  label {
    font-size: 1rem;
  }

  input[type='text'],
  input[type='email'],
  textarea {
    font-size: 0.9rem;
  }

  button {
    padding: 0.7rem 1rem;
  }
}

.form-group {
  animation: zoomIn 2s ease-in-out;
}

@keyframes zoomIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
