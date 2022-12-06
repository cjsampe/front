<template>
    <div id="container">
    <div class="form-wrap">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Título de tu comentario:">
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Escribe aquí un título"
          v-model="formData.name"

          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Usuario">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.user"

          placeholder="Escribe aquí tu usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Comentario">
        <b-form-textarea
          id="textarea"
          v-model="formData.post"
          placeholder="Escribe tu experiencia..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="btn btn-dark">Enviar</b-button>

    </b-form>
  </div></div>
</template>
<script>
 import API from "./api";

export default {
  name: "RouteForm",

  data() {
    return {
      formData: {
        name: "",
        user: "",
        post: "",
        route:""
      },
    };
  },
  methods:{
    async onSubmit(event){
        event.preventDefault() 
        console.log({...this.formData});

        this.formData.route = this.$route.params.id
        let api = new API("http://localhost:2044");

        let result = await api.postCommnet(this.formData)
        console.log({...result});

        window.location.reload()
    }
  }
};
</script>

<style>
#container {
  margin: 20px auto;
  max-width: 1000px;
  padding: 10px;
}

.form-wrap {
  background: #5ecfad;
  padding: 25px 25px;
  color: rgb(10, 10, 10);
  border-radius: 20px;
}

.form-wrap .form-group label {
  display: block;
  color: #e4bf76;
}

.form-wrap .form-group input {
  width: 100%;
  padding: 10px;
  border: #ddd 1px solid;
  color: #080807;
  border-radius: 2px;
}

.form-wrap button {
  display: block;
  width: 10%;
  padding: 10px;
  margin-top: 20px;
  background: #0a0a0a;
  color: #faf6f5;
  cursor: pointer;
  border-radius: 4px;
}

.form-wrap button:hover {
  background: #cb731a;
}

.form-wrap .bottom-text {
  font-size: 13px;
  margin-top: 20px;
}
</style>